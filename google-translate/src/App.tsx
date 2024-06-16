/* eslint-disable @typescript-eslint/no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './assets/const';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelctor';
import { SectionType } from './assets/type.d';
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';

function App() {
  const {
    state,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()
  useEffect(()=>{
    translate(state.fromLanguage, state.toLanguage, state.fromText).then((res)=>{
      if(res==null)return
      setResult(res)
    }).catch(()=>{
      setResult('error')
    })
  },[state.fromText])
  return (
    <>
    <Container >
    <h2>Google Translater</h2>
      <Row>
        <Col>
        <Stack gap={2}>
          <h2>From</h2>
          <LanguageSelector
            type={SectionType.From}
            value={state.fromLanguage}
            onChange={setFromLanguage}
          ></LanguageSelector>

          <TextArea 
            type={SectionType.From}
            value={state.fromText}
            onChange={setFromText}
            loading={state.loading}
            />
        </Stack>
        </Col>
        <Col xs='auto'>
          <Button 
            variant='link'
            onClick={interchangeLanguage}
            disabled={ state.fromLanguage === AUTO_LANGUAGE}
            >
            TRS 
            <ArrowsIcon/>
          </Button>
        </Col>
        <Col>
        <Stack gap={2}>
          <h2>To</h2>
          <LanguageSelector 
            type={SectionType.To}
            value={state.toLanguage}
            onChange={setToLanguage} 
            ></LanguageSelector>
          <TextArea 
            type={SectionType.To}
            value={state.result}
            onChange={setResult}
            loading={state.loading}
            />
        </Stack>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
