
import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import ChevronRightIcon from './ChevronRightIcon';

interface ProjectIdea {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectIdeaGenerator: React.FC = () => {
  const [ideas, setIdeas] = useState<ProjectIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIdeas = async () => {
    if (!process.env.API_KEY) {
      setError("API Key is not configured. Please contact the site administrator.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const responseSchema = {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "A catchy name for the hackathon project."
            },
            description: {
              type: Type.STRING,
              description: "A brief, one-sentence description of the project."
            },
            technologies: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING
              },
              description: "A list of 3-4 suggested technologies or frameworks to build the project."
            },
          },
          required: ["title", "description", "technologies"],
        },
      };

      const prompt = "Generate 3 creative and unique hackathon project ideas for university computer science students. The projects should be feasible to build within a 24-hour timeframe. Focus on themes like sustainability, improving campus life, or educational tools.";
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: responseSchema,
        },
      });

      const parsedIdeas = JSON.parse(response.text);
      setIdeas(parsedIdeas);

    } catch (err) {
      console.error("Error generating project ideas:", err);
      setError("Sorry, we couldn't generate ideas at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 border-l-4 border-[#00643f] p-8 rounded-r-lg text-left">
      <h3 className="text-3xl font-bold text-[#00643f]">Need Inspiration?</h3>
      <p className="text-lg mt-4 mb-6">
        Stuck on an idea for URHacks? Let our AI assistant brainstorm some creative starting points for you!
      </p>
      <button
        onClick={generateIdeas}
        disabled={isLoading}
        className="inline-flex items-center justify-center bg-[#fdb927] text-[#00643f] font-bold py-3 px-8 text-lg hover:bg-yellow-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? (
            <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#00643f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
            </>
        ) : (
            <>
                Generate Project Ideas <ChevronRightIcon />
            </>
        )}
      </button>

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
      
      <div className="mt-8 grid gap-6">
        {ideas.map((idea, index) => (
          <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg transition-shadow hover:shadow-md">
            <h4 className="text-xl font-bold text-[#00643f]">{idea.title}</h4>
            <p className="mt-2 text-gray-700">{idea.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {idea.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectIdeaGenerator;
