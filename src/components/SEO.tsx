import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    return (
        <Helmet>
            {/* This sets the title in the browser tab */}
            <title>{`${title} | UofR CSSS`}</title>

            {/* This is the description for Google and social media */}
            <meta name="description" content={description} />
        </Helmet>
    );
};

export default SEO;