import { useEffect } from 'react';

const FORM_EMBED_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

type LeadConnectorSurveyEmbedProps = {
  id: string;
  src: string;
  title?: string;
  minHeight?: number;
};

export function LeadConnectorSurveyEmbed({
  id,
  src,
  title = 'survey',
  minHeight = 820
}: LeadConnectorSurveyEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${FORM_EMBED_SCRIPT_SRC}"]`
    );

    if (existing) return;

    const script = document.createElement('script');
    script.src = FORM_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={src}
      style={{ border: 'none', width: '100%', minHeight }}
      scrolling="no"
      id={id}
      title={title}
    />
  );
}
