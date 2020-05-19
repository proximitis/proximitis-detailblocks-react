import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  text: string;
};

const Markdown = ({ text }: Props) => (
  <ReactMarkdown source={text} unwrapDisallowed={true} allowedTypes={['text', 'emphasis', 'strong']} />
);

export default Markdown;
