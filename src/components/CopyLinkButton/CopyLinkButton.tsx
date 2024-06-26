import React, { useState, useCallback } from 'react';
import Button from '../Button/Button';

type Props = {
  roomUrl: string;
};

const CopyLinkButton = (props: Props) => {
  const [showCopied, setShowCopied] = useState(false);

  const copy = useCallback(() => {
    console.log(props.roomUrl);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  }, [props.roomUrl]);

  return (
    <Button
      type="secondary"
      robotId="robots-copy-room-link"
      onPress={copy}
      disabled={showCopied}
      label={showCopied ? 'Copied!' : 'Copy room link'}
    />
  );
};

export default CopyLinkButton;
