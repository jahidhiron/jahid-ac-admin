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

const Film_edits = () => {
  const tips = [
    {
      title: "Take breaks and review frequently.",
      content:
        "Check often for any changes such as new noises. Be aware of your own energy levels--filming can tire you out and that translates to the screen.",
    },
    {
      title: "Build rapport.",
      content:
        "Students want to know who’s teaching them. Even for a course that is mostly screencasts, film yourself for your introduction. Or go the extra mile and film yourself introducing each section!",
    },
    {
      title: "Being on camera takes practice.",
      content:
        "Make eye contact with the camera and speak clearly. Do as many retakes as you need to get it right.",
    },
    {
      title: "Set yourself up for editing success.",
      content:
        "You can edit out long pauses, mistakes, and ums or ahs. Film a few extra activities or images that you can add in later to cover those cuts.",
    },
    {
      title: "Create audio marks.",
      content:
        "Clap when you start each take to easily locate the audio spike during editing. Use our guides to manage your recording day efficiently.",
    },
    {
      title: "For screencasts, clean up.",
      content:
        "Move unrelated files and folders off your desktop and open any tabs in advance. Make on-screen text at least 24pt and use zooming to highlight.",
    },
  ];

  const requirements = [
    "Film and export in HD to create videos of at least 720p, or 1080p if possible",
    "Audio should come out of both the left and right channels and be synced to your video",
    "Audio should be free of echo and background noise so as not to be distracting to students",
  ];

  const resources = [
    {
      title: "Create a test video",
      description: "Get feedback before filming your whole course",
    },
    {
      title: "Teaching Center: Guide to quality A/V",
      description: "Film and edit with confidence",
    },
    {
      title: "Udemy trust & safety",
      description: "Our policies for instructors and students",
    },
  ];

  return (
    <div>
      <h1 className='text-2xl font-bold'>Film & Edit</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />

      {/* Course preparation */}
      <div className='h-[300px] flex items-center'>
        <Section title="You’re ready to share your knowledge.">
          <p className='mt-5'>
            This is your moment! If you’ve structured your course and used our
            guides, you're well prepared for the actual shoot. Pace yourself,
            take time to make it just right, and fine-tune when you edit.
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

export default Film_edits;
