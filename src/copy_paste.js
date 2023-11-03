label: 'About us',
content: (
  
  <div class = 'text-center'>
    <h1 className="text-2xl font-semibold">About us</h1>
    <div className="my-4">
      <p>We are researches at the University of Bergen and this information platform is an artifact of a feasability study.
        The research goal is to explore possibilities of sharing knowledge about antimicrobirocial resistance, tailored to suit a clinical department or institution
        which contribues and modifies the text according to the needs and preferences. Developed by Marcus Sannes in collaboration with Ankica Babic.
      </p>
      <p>If you would like to contribute with feedback to the platform, feel free to contact me at <b>dib009@uib.no </b></p>
      
    </div>
  </div>
),


<h1 className="text-2xl font-semibold">Welcome to the AMR plaform!</h1>
<div classname = 'mb-5'><p>The Information presented is dedicated to sharing knowledge about microbial resistance. Both physicians and 
  patients are welcome to shape their knowledge in form of quizes and explore further references in case of extending their knowledge. Our mission was
  to gather the most essential information in one place and to encourage further exploration.
</p>
</div>

const quizPhysicians = [
    {
        question: "With antibiotics becoming less effective, it has grown increasingly difficult, \
        and in some cases impossible, to treat patients for even common infectious diseases like pneumonia.",
        answer: true,
        explanation: "This is true. According to the World Health Organization (WHO), antibiotic resistance is\
         rising to dangerously high levels in all parts of the world as new resistance mechanisms are emerging and spreading globally",
        reference: "Reference: <a href='https://www.thermofisher.com/procalcitonin/wo/en/antibiotic-stewardship/antibiotic-overuse-resistance.html?cid=0se_gaw_25052021_AR3IFK' target='_blank' class='font-bold text-green-500 hover:text-green-700'>Thermofisher.com</a>",
      },
    {
        question: "is this working?",
        answer: true,
        explanation: "did this work?",
        reference: "Reference: <a href='https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance' target='_blank' class='font-bold text-green-500 hover:text-green-700'>World Health Organization</a>",
      },
    {
        question: "is this working?",
        answer: true,
        explanation: "did this work?",
        reference: "Reference: <a href='https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance' target='_blank' class='font-bold text-green-500 hover:text-green-700'>World Health Organization</a>",
      },
    {
        question: "is this working?",
        answer: false,
        explanation: "did this work?",
        reference: "Reference: <a href='https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance' target='_blank' class='font-bold text-green-500 hover:text-green-700'>World Health Organization</a>",
      },
    {
        question: "is this working?",
        answer: false,
        explanation: "did this work?",
        reference: "Reference: <a href='https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance' target='_blank' class='font-bold text-green-500 hover:text-green-700'>World Health Organization</a>",
      },
    
    
    // ... add more questions as needed
  ];

  export default quizPhysicians;

