import { useEffect } from 'react';

// This is a custom hook that sets the document title.
const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | UofR CSSS`;
  }, [title]); // It will re-run whenever the title prop changes.
};

export default usePageTitle;