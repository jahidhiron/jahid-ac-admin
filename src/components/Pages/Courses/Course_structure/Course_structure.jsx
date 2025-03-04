import React from "react";

const Section = ({ title, children }) => (
  <section className='mt-8'>
    <h2 className='text-lg font-bold mt-6'>{title}</h2>
    <div className='mt-1'>{children}</div>
  </section>
);

const List = ({ items }) => (
  <ul className='list-disc ml-5 mt-2'>
    {items.map((item, index) => (
      <li key={index} className='mt-1'>
        {item}
      </li>
    ))}
  </ul>
);

const Course_structure = () => {
  const tips = [
    {
      title: "Start with your goals.",
      content:
        "Setting goals for what learners will accomplish in your course (also known as learning objectives) at the beginning will help you determine what content to include in your course and how you will teach the content to help your learners achieve the goals.",
    },
    {
      title: "Create an outline.",
      content:
        "Decide what skills you’ll teach and how you’ll teach them. Group related lectures into sections. Each section should have at least 3 lectures, and include at least one assignment or practical activity.",
    },
    {
      title: "Introduce yourself and create momentum.",
      content:
        "People online want to start learning quickly. Make an introduction section that gives learners something to be excited about in the first 10 minutes.",
    },
    {
      title: "Sections have a clear learning objective.",
      content:
        "Introduce each section by describing the section's goal and why it’s important. Give lectures and sections titles that reflect their content and have a logical flow.",
    },
    {
      title: "Lectures cover one concept.",
      content:
        "A good lecture length is 2-7 minutes to keep students interested and help them study in short bursts. Cover a single topic in each lecture so learners can easily find and re-watch them later.",
    },
    {
      title: "Mix and match your lecture types.",
      content:
        "Alternate between filming yourself, your screen, and slides or other visuals. Showing yourself can help learners feel connected.",
    },
    {
      title: "Practice activities create hands-on learning.",
      content:
        "Help learners apply your lessons to their real world with projects, assignments, coding exercises, or worksheets.",
    },
  ];

  const requirements = [
    "See the complete list of course quality requirements",
    "Your course must have at least five lectures",
    "All lectures must add up to at least 30+ minutes of total video",
    "Your course is composed of valuable educational content and free of promotional or distracting materials",
  ];

  const resources = [
    {
      title: "Udemy Trust & Safety",
      description: "Our policies for instructors and students",
    },
    {
      title: "Join the instructor community",
      description: "A place to connect with other instructors",
    },
    {
      title: "Official Udemy Course: How to Create an Online Course",
      description:
        "Learn about course creation from the Udemy Instructor Team and experienced instructors",
    },
  ];

  return (
    <div className=''>
      <h1 className='text-2xl font-bold'>Course Structure</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />

      {/* Course planning */}
      <div className='h-[300px] flex items-center'>
        <Section title="There's a course in you. Plan it out.">
          <p className='mt-5'>
            Planning your course carefully will create a clear learning path for
            students and help you once you film. Think down to the details of
            each lecture including the skill you’ll teach, estimated video
            length, practical activities to include, and how you’ll create
            introductions and summaries.
          </p>
        </Section>
      </div>

      {/* Tips */}
      <h3 className='text-2xl font-bold mt-8'>Tips</h3>
      {tips.map((tip, index) => (
        <Section key={index} title={tip.title}>
          <p>{tip.content}</p>
        </Section>
      ))}

      {/* Requirements */}
      <h3 className='text-2xl font-bold mt-8'>Requirements</h3>
      <List items={requirements} />

      {/* Resources */}
      <h3 className='text-2xl font-bold mt-8'>Resources</h3>
      {resources.map((resource, index) => (
        <Section key={index} title={resource.title}>
          <p>{resource.description}</p>
        </Section>
      ))}
    </div>
  );
};

export default Course_structure;
