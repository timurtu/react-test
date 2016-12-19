/**
 * Created by timur on 12/18/16.
 */

import React from 'react'

const textShadow = '0 2px 2px rgba(0, 0, 0, 0.5)'

const Stock = ({ children }) =>
  <div>
    <span style={{
      textShadow,
      color: 'whitesmoke',
    }}>{children}</span>

    <img style={{
      maxWidth: '100%',
      minHeight: '30rem'
    }} src="res/stock.jpeg" alt="Awesome stock background"/>
  </div>

const Headline = ({ children }) =>
  <span>
  <h1 className="hidden-xs" style={{
    position: 'absolute',
    top: '12rem',
    left: '16rem',
    display: 'inline'
  }}>
    {children}
  </h1>

  <h2 className="visible-xs" style={{
    position: 'absolute',
    display: 'inline',
    top: '6rem',
    margin: '1em'
  }}>
    {children}
  </h2>
</span>


const Subhead = ({ children, top, left }) =>
  <span>
    <h2 className="hidden-xs" style={{
      position: 'absolute',
      top,
      left,
      display: 'inline',
    }}>
      {children}
    </h2>

    <p className="visible-xs" style={{
      position: 'absolute',
      display: 'inline',
      top,
      left: '1em'
    }}>
      {children}
    </p>
</span>

const BigButton = ({ children }) =>
  <span>
    <a style={{
      position: 'absolute',
      top: '47rem',
      left: '56%',
      width: '20rem'
    }} className="hidden-xs btn btn-lg btn-default">
      {children}
    </a>
  </span>

const Centered = ({ children, margin }) =>
  <div style={{
    display: 'table',
    margin: `${margin} auto`
  }}>
    {children}
  </div>

const BigIcon = ({ name }) => <i style={{
  fontSize: '12em',
  display: 'table',
  margin: '6rem auto'
}} className={`fa fa-${name}`}/>

const LeadText = ({ children }) =>
  <p style={{ textAlign: 'center' }} className="lead">
    {children}
  </p>

const SplashPage = () =>
  <div>
    <Stock>
      <Headline>Keep up with your favorite developers</Headline>
      <Subhead top="20rem" left="16rem">Follow developers on their journey, </Subhead>
      <Subhead top="24rem" left="18rem">show them what you've been up to, </Subhead>
      <Subhead top="28rem" left="20rem">and share the experience.</Subhead>
      <BigButton>Log in</BigButton>
    </Stock>

    <div className="container">
      <Centered margin="5rem">
        <h1>The Social Network for developers</h1>
      </Centered>

      <div className="row">
        <div className="col-md-4">
          <Centered margin="2rem">
            <h2>Keep in touch</h2>
          </Centered>

          <BigIcon name="envelope-open-o"/>

          <LeadText>Follow, reply, like, and recommit commits pushed by the developers you follow.</LeadText>

        </div>

        <div className="col-md-4">
          <Centered margin="2rem">
            <h3>Write better commit messages</h3>

            <BigIcon name="file-code-o"/>

            <LeadText>
              You will care more about the quality of your commit messages when you know people are reading them.
            </LeadText>
          </Centered>
        </div>

        <div className="col-md-4">
          <Centered margin="2rem">
            <h2>Chat</h2>
          </Centered>

          <BigIcon name="comments-o"/>

          <LeadText>
            Communicate with developers who follow you back.
          </LeadText>
        </div>
      </div>
    </div>
  </div>

export default SplashPage