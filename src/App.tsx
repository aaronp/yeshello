import './App.css'

function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1>yes hello!</h1>
        <p className="tagline">please DO just say hello</p>
      </header>

      {/* Intro */}
      <div className="intro">
        <p>
          <strong>If you want to connect with someone on chat, DO just say hello.</strong>{' '}
          Don't launch straight into your question — that's impersonal and honestly a bit rude.
        </p>
        <p>
          Imagine walking into someone's office, not making eye contact, and just barking a
          question at them. That's what skipping "hello" feels like. 🤦‍♂️
        </p>
      </div>

      {/* Bad example */}
      <div className="section">
        <h2 className="section-title bad">❌ Don't do this:</h2>
        <div className="chat">
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#e74c3c' }}>JT</div>
              <span className="message-name">Jamie Tartt</span>
              <span className="message-time">9:32 AM</span>
            </div>
            <div className="message-text">
              Hey can you check if the Richmond server is responding to API calls? It's returning
              502 errors on the /players endpoint and coach needs the lineup data by noon.
            </div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#3498db' }}>TL</div>
              <span className="message-name">Ted Lasso</span>
              <span className="message-time">9:45 AM</span>
            </div>
            <div className="message-text">... 😔</div>
          </div>
        </div>
        <p className="caption">
          Jamie didn't even say hello. Ted is hurt but will fix the server anyway because he's Ted.
        </p>
      </div>

      {/* Good example */}
      <div className="section">
        <h2 className="section-title good">✅ Instead, try this:</h2>
        <div className="chat">
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#9b59b6' }}>RK</div>
              <span className="message-name">Roy Kent</span>
              <span className="message-time">2:15 PM</span>
            </div>
            <div className="message-text">Hey Ted! Hope your day's going well 👋</div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#3498db' }}>TL</div>
              <span className="message-name">Ted Lasso</span>
              <span className="message-time">2:16 PM</span>
            </div>
            <div className="message-text">Roy! Hey there, buddy! 😄 What's going on?</div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#9b59b6' }}>RK</div>
              <span className="message-name">Roy Kent</span>
              <span className="message-time">2:16 PM</span>
            </div>
            <div className="message-text">
              Not bad. Listen — the Richmond server's throwing 502s on /players. Coach needs
              lineup data by noon tomorrow. Can you take a look?
            </div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#3498db' }}>TL</div>
              <span className="message-name">Ted Lasso</span>
              <span className="message-time">2:17 PM</span>
            </div>
            <div className="message-text">
              On it like a bonnet! 🎉 I'll have that sorted before you can say "football is life."
            </div>
          </div>
        </div>
        <p className="caption">
          Roy said hello first. Ted feels valued as a human being. The server still gets fixed,
          but now everyone's day is a little better.
        </p>
      </div>

      {/* Warm alternatives */}
      <div className="section">
        <h3>Some warm alternatives:</h3>
        <ul className="alternatives">
          <li>"Hey! Quick question when you have a sec — [question]"</li>
          <li>"Hi [name]! Hope you're doing well. I was wondering..."</li>
          <li>"Good morning! Got a minute? [question]"</li>
          <li>"Hello! 👋 [question]"</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="disclaimer">We are completely serious. 🫡</p>
        <p className="attribution">
          A rebuttal to <a href="https://nohello.net/en/">nohello.net</a>
        </p>
      </footer>
    </div>
  )
}

export default App
