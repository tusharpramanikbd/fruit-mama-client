import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container blogs-container'>
      <h2 className='mt-5'>Difference between javascript and nodejs?</h2>
      <p>
        Javascript is a lightweight, object-oriented scripting language that is
        used to build dynamic HTML pages with interactive effects on a webpage.
        Whereas Node.js is a cross-platform, open-source JavaScript runtime
        environment that enables JavaScript to be run on the server. Javascript
        runs on the browser. Node.js enables JavaScript code to run outside of
        the browser. Javascript mainly used for client side activity like
        validation, interaction with elements. But Node.js is used mainly for
        server side activity like different API creation, connection with
        database, etc.
      </p>

      <h2 className='mt-5'>When to use Node.js and when to use Mongodb?</h2>
      <p>
        Node.js is primarily used for non-blocking, event-driven servers, due to
        its single-threaded nature. It's used for traditional web sites and
        back-end API services, but was designed with real-time, push-based
        architectures in mind. Node.js is best suited for real-time
        applications: online games, collaboration tools, chat rooms, or anything
        where what one user (or robot? or sensor?) does with the application
        needs to be seen by other users immediately, without a page refresh.
      </p>
      <p>
        NoSQL databases like MongoDB are a good choice when your data is
        document-centric and doesn't fit well into the schema of a relational
        database, when you need to accommodate massive scale and when you are
        rapidly prototyping.
      </p>

      <h2 className='mt-5'>Difference between sql and nosql?</h2>
      <p>
        SQL is used for relational databse, whereas NoSQL is used for
        non-relational database.SQL databases can be scaled vertically, by
        increasing the processing power of existing hardware. But NoSQL
        databases use a master-slave architecture which scales better
        horizontally, with additional servers or nodes. SQL database schemata
        always represent relational, tabular data, with rules about consistency
        and integrity. They contain tables with columns (attributes) and rows
        (records), and keys have constrained logical relationships. NoSQL
        databases need not stick to this format, but generally fit into one of
        four broad categories: Column-oriented, key-value, Document, Graph.
      </p>

      <h2 className='mt-5'>What is the purpose of jwt and how does it work?</h2>
      <p>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued. JWTs differ from other web tokens
        in that they contain a set of claims. Claims are used to transmit
        information between two parties. What these claims are depends on the
        use case at hand. For example, a claim may assert who issued the token,
        how long it is valid for, or what permissions the client has been
        granted.
      </p>
    </div>
  )
}

export default Blogs
