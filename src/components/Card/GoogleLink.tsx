import React, { useMemo } from 'react';

import { FcGoogle } from 'react-icons/fc'

interface GoogleLinkProps {
  searchTerm: string;
  size?: number;
}

const GoogleLink : React.FC<GoogleLinkProps> = ({ searchTerm, size = 20 }) => {

  const link = useMemo(() => {
    const encoded = encodeURI(searchTerm);
    return `https://www.google.com/search?q=Star+Wars+${encoded}&tbm=isch`
  }, [searchTerm])

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={`Search images of "${searchTerm}" at Google.`}
    >
      <FcGoogle size={size} />
    </a>
  );
}

export default GoogleLink;
