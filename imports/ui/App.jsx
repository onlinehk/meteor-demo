import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Link } from 'react-router-dom';
import Links from "../api/links";

const App = (props) => {
  const deleteLink = (e) => {
    Meteor.call("removeLink", e.currentTarget.dataset.id, (err) => {
      if(!err) console.log("success")
    });
  }
  const renderLinks = () => {
    return props.links.map((obj, key) => {
      return <button data-id={obj._id} onClick={deleteLink} key={key}>{obj.title}</button>
    });
  }
  return (
    <div>
      <h1>Welcome to Meteors!</h1>
      <img src="/kv-1-m.jpg" />
      <br /><br />
      { renderLinks() }
      <br /><br />
      <Link to="/about">About</Link>
    </div>
  )
};

export default withTracker(() => {
  Meteor.subscribe('links');
  return {
    links: Links.find().fetch()
  }
})(App);
