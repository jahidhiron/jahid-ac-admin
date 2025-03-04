import React from "react";

const Section = ({ title, children }) => (
  <section className='mt-5'>
    <h2 className='text-xl font-bold'>{title}</h2>
    <div className='mt-2'>{children}</div>
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

const CourseSetups = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Setup & Test Video</h1>
      <hr className='border-t-2 border-gray-400 mt-1' />

      {/* Introduction */}
      <div className='h-[300px] flex items-center'>
        <Section title='Arrange your ideal studio and get early feedback'>
          <p className='mt-5'>
            It's important to get your audio and video set up correctly now,
            because it's much more difficult to fix your videos after you’ve
            recorded. There are many creative ways to use what you have to
            create professional-looking video.
          </p>
        </Section>
      </div>

      {/* Tips Section */}
      <h3 className='text-2xl font-bold mt-8'>Tips</h3>
      <Section title='Equipment can be easy.'>
        <p>
          You don’t need to buy fancy equipment. Most smartphone cameras can
          capture video in HD, and you can record audio on another phone or
          external microphone.
        </p>
      </Section>
      <Section title='Students need to hear you.'>
        <p>
          A good microphone is the most important piece of equipment you will
          choose. There are a lot of affordable options. Make sure it’s
          correctly plugged in and 6-12 inches (15-30 cm) from you.
        </p>
      </Section>
      <Section title='Make a studio.'>
        <p>
          Clean up your background and arrange props. Almost any small space can
          be transformed with a backdrop made of colored paper or an ironed bed
          sheet.
        </p>
      </Section>
      <Section title='Light the scene and your face.'>
        <p>
          Turn off overhead lights. Experiment with three-point lighting by
          placing two lamps in front of you and one behind aimed at the
          background.
        </p>
      </Section>
      <Section title='Reduce noise and echo.'>
        <p>
          Turn off fans or air vents, and record at a time when it’s quiet.
          Place acoustic foam or blankets on the walls, and bring in rugs or
          furniture to dampen echo.
        </p>
      </Section>
      <Section title='Be creative.'>
        <p>
          Students won’t see behind the scenes. No one will know if you’re
          surrounded by pillows for soundproofing...unless you tell other
          instructors in the community!
        </p>
      </Section>

      {/* Requirements Section */}
      <h3 className='text-2xl font-bold mt-8'>Requirements</h3>
      <List
        items={[
          "Film and export in HD to create videos of at least 720p, or 1080p if possible.",
          "Audio should come out of both the left and right channels and be synced to your video.",
          "Audio should be free of echo and background noise so as not to be distracting to students.",
        ]}
      />

      {/* Resources Section */}
      <h3 className='text-2xl font-bold mt-8'>Resources</h3>
      <Section title='Teaching Center: Guide to equipment'>
        <p>Make a home studio on a budget.</p>
      </Section>
      <Section title='Udemy Trust & Safety'>
        <p>Our policies for instructors and students.</p>
      </Section>
      <Section title='Join the community'>
        <p>A place to talk with other instructors.</p>
      </Section>
    </div>
  );
};

export default CourseSetups;
