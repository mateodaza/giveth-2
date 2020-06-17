import React from 'react'
import { Heading, Box, Card, Text, ThemeProvider } from 'theme-ui'
import styled from '@emotion/styled'

import theme from '../gatsby-plugin-theme-ui/index'
import Donate from '../components/donateForm'

const Container = styled.div``

const ProjectCard = styled(Card)`
  background-color: ${theme.colors.background};
  margin-bottom: 30px;
  border-radius: 6px;
  width: 316px;
`

const Dot = styled.span`
  height: 68px;
  width: 68px;
  display: grid;
  color: ${theme.colors.background};
  border: 6px solid ${theme.colors.background};
  border-radius: 50%;
  position: absolute;
  bottom: -34px;
  left: 24px;
  z-index: 1;
  font-family: 'Red Hat Text', sans-serif;
  font-size: 10px;
`

const DotInner = styled.span`
  display: block;
  text-align: center;
  align-self: center;
  position: relative;
`

const ProjectListing = props => (
  <ThemeProvider theme={theme}>
    <Container>
      <ProjectCard style={{}}>
        <div
          src={props.image}
          style={{
            width: '100%',
            height: '186px',
            margin: '0 auto',
            borderRadius: '6px 6px 0px 0px',
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
          alt={props.name}
        >
          <Dot
            style={{
              backgroundColor:
                props.raised === 0
                  ? theme.colors.attention
                  : theme.colors.secondary
            }}
          >
            {props.raised === 0 ? (
              <DotInner>
                <Text sx={{ variant: 'text.overlineSmall' }}>New</Text>
              </DotInner>
            ) : (
              <DotInner>
                <Text sx={{ variant: 'text.overlineSmall' }}>RAISED</Text>
                <Text sx={{ variant: 'text.microbold' }}>${props.raised}</Text>
              </DotInner>
            )}
          </Dot>
        </div>
        <Heading
          sx={{ variant: 'headings.h6' }}
          style={{
            padding: '2.5rem 1rem 1rem 1rem',
            width: '260',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {props.name}
        </Heading>
        <br />
        {/**
         * Project Description Text
         * 
         * 
         * 
         * 
        <Text
          sx={{ variant: 'text.default' }}
          style={{
            width: '260'
          }}
        >
          Textdescriptions should be included in the data model as a blurb.
        </Text>
        */}
      </ProjectCard>
      <Donate doDonate={values => alert('donating' + values.amount)} />
    </Container>
  </ThemeProvider>
)

export default ProjectListing
