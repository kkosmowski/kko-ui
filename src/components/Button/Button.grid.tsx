import React from 'react';

import { Button } from './Button';

import { Grid } from '~/assets/Grid/Grid';

export const AllButtons = () => (
  <Grid>
    <Grid.Row header>
      <span></span>
      <span>Ghost</span>
      <span>
        Ghost
        <br />
        (disabled)
      </span>
      <span>Contained</span>
      <span>
        Contained
        <br />
        (disabled)
      </span>
      <span>Outlined</span>
      <span>
        Outlined
        <br />
        (disabled)
      </span>
      <span>Text</span>
      <span>
        Text
        <br />
        (disabled)
      </span>
    </Grid.Row>

    <Grid.Row>
      <span>Default</span>
      <Button color="default" variant="ghost" size="md">
        Button
      </Button>
      <Button color="default" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="default" variant="contained" size="md">
        Button
      </Button>
      <Button color="default" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="default" variant="outlined" size="md">
        Button
      </Button>
      <Button color="default" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="default" variant="text" size="md">
        Button
      </Button>
      <Button color="default" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Primary</span>
      <Button color="primary" variant="ghost" size="md">
        Button
      </Button>
      <Button color="primary" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="primary" variant="contained" size="md">
        Button
      </Button>
      <Button color="primary" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="primary" variant="outlined" size="md">
        Button
      </Button>
      <Button color="primary" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="primary" variant="text" size="md">
        Button
      </Button>
      <Button color="primary" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Secondary</span>
      <Button color="secondary" variant="ghost" size="md">
        Button
      </Button>
      <Button color="secondary" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="secondary" variant="contained" size="md">
        Button
      </Button>
      <Button color="secondary" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="secondary" variant="outlined" size="md">
        Button
      </Button>
      <Button color="secondary" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="secondary" variant="text" size="md">
        Button
      </Button>
      <Button color="secondary" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Success</span>
      <Button color="success" variant="ghost" size="md">
        Button
      </Button>
      <Button color="success" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="success" variant="contained" size="md">
        Button
      </Button>
      <Button color="success" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="success" variant="outlined" size="md">
        Button
      </Button>
      <Button color="success" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="success" variant="text" size="md">
        Button
      </Button>
      <Button color="success" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Info</span>
      <Button color="info" variant="ghost" size="md">
        Button
      </Button>
      <Button color="info" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="info" variant="contained" size="md">
        Button
      </Button>
      <Button color="info" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="info" variant="outlined" size="md">
        Button
      </Button>
      <Button color="info" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="info" variant="text" size="md">
        Button
      </Button>
      <Button color="info" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Warning</span>
      <Button color="warning" variant="ghost" size="md">
        Button
      </Button>
      <Button color="warning" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="warning" variant="contained" size="md">
        Button
      </Button>
      <Button color="warning" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="warning" variant="outlined" size="md">
        Button
      </Button>
      <Button color="warning" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="warning" variant="text" size="md">
        Button
      </Button>
      <Button color="warning" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Error</span>
      <Button color="error" variant="ghost" size="md">
        Button
      </Button>
      <Button color="error" variant="ghost" size="md" disabled>
        Button
      </Button>
      <Button color="error" variant="contained" size="md">
        Button
      </Button>
      <Button color="error" variant="contained" size="md" disabled>
        Button
      </Button>
      <Button color="error" variant="outlined" size="md">
        Button
      </Button>
      <Button color="error" variant="outlined" size="md" disabled>
        Button
      </Button>
      <Button color="error" variant="text" size="md">
        Button
      </Button>
      <Button color="error" variant="text" size="md" disabled>
        Button
      </Button>
    </Grid.Row>

    <br />

    <Grid.Row header>
      <span></span>
      <span>
        Ghost
        <br />
        (large)
      </span>
      <span>
        Ghost
        <br />
        (small)
      </span>
      <span>
        Contained
        <br />
        (large)
      </span>
      <span>
        Contained
        <br />
        (small)
      </span>
      <span>
        Outlined
        <br />
        (large)
      </span>
      <span>
        Outlined
        <br />
        (small)
      </span>
      <span>
        Text
        <br />
        (large)
      </span>
      <span>
        Text
        <br />
        (small)
      </span>
    </Grid.Row>

    <Grid.Row>
      <span>Default</span>
      <Button color="default" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="default" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="default" variant="contained" size="lg">
        Button
      </Button>
      <Button color="default" variant="contained" size="sm">
        Button
      </Button>
      <Button color="default" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="default" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="default" variant="text" size="lg">
        Button
      </Button>
      <Button color="default" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Primary</span>
      <Button color="primary" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="primary" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="primary" variant="contained" size="lg">
        Button
      </Button>
      <Button color="primary" variant="contained" size="sm">
        Button
      </Button>
      <Button color="primary" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="primary" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="primary" variant="text" size="lg">
        Button
      </Button>
      <Button color="primary" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Secondary</span>
      <Button color="secondary" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="secondary" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="secondary" variant="contained" size="lg">
        Button
      </Button>
      <Button color="secondary" variant="contained" size="sm">
        Button
      </Button>
      <Button color="secondary" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="secondary" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="secondary" variant="text" size="lg">
        Button
      </Button>
      <Button color="secondary" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Success</span>
      <Button color="success" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="success" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="success" variant="contained" size="lg">
        Button
      </Button>
      <Button color="success" variant="contained" size="sm">
        Button
      </Button>
      <Button color="success" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="success" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="success" variant="text" size="lg">
        Button
      </Button>
      <Button color="success" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Info</span>
      <Button color="info" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="info" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="info" variant="contained" size="lg">
        Button
      </Button>
      <Button color="info" variant="contained" size="sm">
        Button
      </Button>
      <Button color="info" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="info" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="info" variant="text" size="lg">
        Button
      </Button>
      <Button color="info" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Warning</span>
      <Button color="warning" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="warning" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="warning" variant="contained" size="lg">
        Button
      </Button>
      <Button color="warning" variant="contained" size="sm">
        Button
      </Button>
      <Button color="warning" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="warning" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="warning" variant="text" size="lg">
        Button
      </Button>
      <Button color="warning" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>

    <Grid.Row>
      <span>Error</span>
      <Button color="error" variant="ghost" size="lg">
        Button
      </Button>
      <Button color="error" variant="ghost" size="sm">
        Button
      </Button>
      <Button color="error" variant="contained" size="lg">
        Button
      </Button>
      <Button color="error" variant="contained" size="sm">
        Button
      </Button>
      <Button color="error" variant="outlined" size="lg">
        Button
      </Button>
      <Button color="error" variant="outlined" size="sm">
        Button
      </Button>
      <Button color="error" variant="text" size="lg">
        Button
      </Button>
      <Button color="error" variant="text" size="sm">
        Button
      </Button>
    </Grid.Row>
  </Grid>
);
