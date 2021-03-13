import React, { useMemo } from 'react';

import { FcWikipedia } from 'react-icons/fc'

interface WookieepediaLinkProps {
  searchTerm: string;
  size?: number;
}

const WookieepediaLink : React.FC<WookieepediaLinkProps> = ({ searchTerm, size = 20 }) => {

  const link = useMemo(() => {
    const encoded = encodeURI(searchTerm);
    return `https://starwars.fandom.com/wiki/Special:Search?query=${encoded}&scope=internal&navigationSearch=true`
  }, [searchTerm])

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={`Search articles of "${searchTerm}" at Wookieepedia.`}
    >
      <FcWikipedia  size={size}/>
    </a>
  );
}

export default WookieepediaLink;
