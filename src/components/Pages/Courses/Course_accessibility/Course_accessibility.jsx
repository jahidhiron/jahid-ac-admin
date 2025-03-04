import React from "react";
import { Checkbox } from "@mantine/core";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Course_accessibility = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Accessibility</h1>

      <hr className='border-t-2 border-gray-400 mt-1' />
      <div className='mt-6'>
        <div className='p-6 flex gap-2 border-2 rounded'>
          <RiErrorWarningFill className='text-3xl w-[80px] text-primary' />
          <div>
            <h1 className='text-lg font-bold'>
              Create accessible learning content
            </h1>
            <p>
              Accessibility provides a person with a disability access to — and
              benefits of — the same information, interactions, and services as
              a person without a disability in a way that’s sensible,
              meaningful, and usable. In short, it’s the inclusive practice of
              ensuring there are no barriers to learning for as many people as
              possible.
              <br />
              Some may think that accessibility is primarily aimed at helping
              people with physical disabilities, such as those with hearing or
              vision loss. However, making content accessible to everyone isn’t
              just the equitable thing to do, it also helps to broaden your
              reach so that more learners can benefit from your courses.
              <br />
              Learn more about creating accessible content in Udemy’s Teaching
              Center.
            </p>
          </div>
        </div>
        <br />
        <h2 className='text-xl font-bold'>Accessibility checklists</h2>
        <p>
          To help you create accessible course content, we’ve provided
          Instructors with recommendations and best practices to consider while
          creating new courses or updating existing content. Please review these
          accessibility recommendations and checklists to indicate whether your
          course meets the guidelines.
          <br />
          <br />
          Note: while these accessibility guidelines are strongly recommended,
          they are not a requirement prior to publishing your course. Though
          content that does meet these accessibility guidelines may benefit from
          a greater number of learners who could take your course.
        </p>
        <br />
        <br />
        <div>
          <h1 className='text-xl font-bold'>
            Closed captions accessibility checklist
          </h1>
          <div className='my-3 px-2'>
            <li>
              All auto-generated captions should be reviewed to check for
              accuracy. Captions must meet a 99% rate of accuracy.
            </li>
            <li>
              Any relevant sound effects pertinent to the course must be noted
              in the captions, example: (Beeps).
            </li>
            <li>
              Any non-speech elements such as music are captured in the
              captions, example: (Jazzy music).
            </li>
            <li>
              Verbal delivery style indicators are captured in the captions,
              example: (Exclaims).
            </li>
            <li>Captions identify speakers on and off camera.</li>
          </div>
          <p>
            Learn more about providing accessible closed captions in the Udemy
            Teaching Center.
          </p>

          <Checkbox
            className='my-3'
            color='red'
            label='Captions in this course meet these guidelines'
          />
          <hr />
        </div>
        <div className='mt-8'>
          <h1 className='text-xl font-bold'>
            Audio content accessibility checklist
          </h1>
          <div className='my-3 px-2'>
            <li>Audio can stand on its own, like an audiobook.</li>
            <li>Visual content (when not just for decoration) is explained.</li>
            <li>
              Interactions shown on screen are fully explained, without skipping
              steps.
            </li>
            <li>
              Spoken content uses plain language, at a measured (not too quick)
              pace.
            </li>
            <li>
              Figures of speech, idioms, jargon, or slang are avoided, and
              unfamiliar terms or acronyms are defined.
            </li>
            <li>
              Captions for all spoken content have been reviewed for accuracy -
              especially proper names, acronyms, abbreviations, and technical
              terms.
            </li>
          </div>
          <p>
            Learn more about accessible audio content in the Udemy Teaching
            Center.
          </p>

          <Checkbox
            className='my-3'
            color='red'
            label='Audio content in this course meets these guidelines'
          />
          <hr />
        </div>
        <div className='mt-8 mb-12'>
          <h1 className='text-xl font-bold'>
            Course materials accessibility checklist
          </h1>
          <div className='my-3 px-2'>
            <li>
              A table of contents for long documents and a glossary of terms are
              provided.
            </li>
            <li>
              Semantic markup for headings, bulleted lists, or numbered lists
              has been applied to all documents.
            </li>
            <li>
              Content is organized in short paragraphs and/or simple tables.
            </li>
            <li>Links to external resources use descriptive language.</li>
            <li>
              Alternative text is provided for all images in documents or slide
              presentations.
            </li>
            <li>Strong color contrast has been used for text and images.</li>
          </div>
          <p>
            Learn more about accessible course materials in the Udemy Teaching
            Center.
          </p>

          <Checkbox
            className='my-3'
            color='red'
            label='Materials attached to this course meet these guidelines'
          />
          <hr />
        </div>
        <div>
          <h1 className='text-xl font-bold'>Accessibility resources</h1>
          <Link className='text-blue-500 mt-6 text-lg' to={"/"}>
            Creating accessible learning content.
          </Link>{" "}
          <br />
          <Link className='text-blue-500 text-lg' to={"/"}>
            Audio content for accessible learning
          </Link>{" "}
          <br />
          <Link className='text-blue-500 text-lg' to={"/"}>
            Visual content for accessible learning
          </Link>{" "}
          <br />
          <Link className='text-blue-500 text-lg' to={"/"}>
            Planning your course accessibility considerations
          </Link>{" "}
          <br />
          <Link className='text-blue-500 text-lg' to={"/"}>
            Creating accessible resource documents
          </Link>{" "}
          <br />
          <Link className='text-blue-500 text-lg' to={"/"}>
            Marking your course as accessible
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course_accessibility;
