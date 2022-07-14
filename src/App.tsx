import './styles/App.css';
import {ToolBar} from './components/toolBar';
import React from 'react';
import { Grid } from '@mui/material';
import {Arraycontainer} from './components/arrayContainer';
import { AlgoritmInfo } from './components/algorithmInfo';
import { useDimensions } from './hooks/useDimensions';

export const App = () =>{
  const { screenWidth } = useDimensions();
  return (
    <div className="App">
      <header className='App-header'>
        <ToolBar />
      </header>
      <main className='App-container'>
        <Grid container spacing={1.5}>
          <Grid item xs={6} md={screenWidth > 1200 ? 9 : 12}>
            <Arraycontainer />
          </Grid>
          { screenWidth > 1200 &&
            <Grid item xs={6} md={3}>
                <AlgoritmInfo />
            </Grid>
          }
        </Grid>
      </main>
    </div>
  );
}