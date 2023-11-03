
import React, { useState } from 'react';

export function Reference({ title, link, description, relatedLinks, topics, documentType, publisher, language }) {
    const greenLinkClass = 'text-green-500 hover:text-green-700';
    const blueLinkClass = 'text-blue-500 hover:text-blue-700';
    const fixedParagraphClass = 'max-w-2xl p-4 mx-auto';
    const maxDescriptionLength = 180;
    const [showMore, setShowMore] = useState(false);
  
    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  
    const truncatedDescription = description.slice(0, maxDescriptionLength);
    const remainingDescription = description.slice(maxDescriptionLength);
  
    
    return (
      <div>
        <div className="mt-4"></div>
        <h1 className="text-2xl font-semibold mt-2">{title}</h1>
        <div class="flex justify-center items-center">
          <span class="flex flex-col items-start mt-2">
            <p><strong class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap w-20">Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer mt-4" className={greenLinkClass}>{title}</a></p>
            <p><strong class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap w-20">Topic:</strong> {topics.join(', ')}</p>
            <p><strong class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap w-20">Subjects:</strong> {documentType}</p>
            <p><strong class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap w-20">Publisher:</strong> {publisher}</p>
            <p><strong class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap w-20">Language:</strong> {language}</p>
          </span>
        </div>
        <div className="mt-4">
          <strong>Description:</strong>
        </div>
        <div className={`${fixedParagraphClass} bg-gray-100 p-4 rounded-lg mb-4`}>
          <p className="mb-0  font-mono p-3 text-sm">
            {showMore ? description : truncatedDescription}
          </p>
          {description.length > maxDescriptionLength && (
            <p className="mb-0">
              {showMore ? (
                <button onClick={toggleShowMore} className="text-blue-500 hover:underline">
                  Show Less
                </button>
              ) : (
                <button onClick={toggleShowMore} className="text-blue-500 hover:underline">
                  Show More
                </button>
              )}
            </p>
          )}
        </div>
        <p className="mb-0"><strong>Related links:</strong></p>
        {relatedLinks.map((relatedLink, i) => (
          <p key={i} className={`${fixedParagraphClass} mb-0`}>
            <a href={relatedLink.link} target="_blank" rel="noopener noreferrer" className={blueLinkClass}>{relatedLink.title}</a>
          </p>
        ))}
      </div>
    );
  }

  export default Reference;