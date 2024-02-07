import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { LabelValueMetadata } from 'mirador/dist/es/src/components/LabelValueMetadata';

export default function () {
  const handleButtonClick = () => {
    alert('You clicked the button!');
  };


  return <>
    <Typography
      variant="h5"
      component="h6"
    >
      <button onClick={handleButtonClick}>Test button</button>
    </Typography>
    <LabelValueMetadata labelValuePairs={[{ label: 'Cat?', values: ['Yes!'] }]} />
  </>;
}