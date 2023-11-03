const quizPhysicians = [
    {
        question: '"With antibiotics becoming less effective, it has grown increasingly difficult, \
        and in some cases impossible, to treat patients for even common infectious diseases like pneumonia."',
        answer: true,
        explanation: "This is true. According to the World Health Organization (WHO), antibiotic resistance is\
         rising to dangerously high levels in all parts of the world as new resistance mechanisms are emerging and spreading globally",
        reference: "Reference: <a href='https://www.thermofisher.com/procalcitonin/wo/en/antibiotic-stewardship/antibiotic-overuse-resistance.html?cid=0se_gaw_25052021_AR3IFK' target='_blank' class='font-bold text-green-500 hover:text-green-700'>Thermofisher.com</a>",
      },
    {
        question: '"You have to take\
        antibiotics to be at risk of developing an antibiotic-resistant infection."',
        answer: false,
        explanation: "People can acquire resistant pathogens without prior antibiotic exposure",
        reference: "Reference: <a href='https://pubmed.ncbi.nlm.nih.gov/21881561/' target='_blank' class='font-bold text-green-500 hover:text-green-700'>Pubmed article</a>",
      },
    {
        question: '"Some antimicrobials such as ciprofloxacin are chemically synthesised so are relatively stable and difficult to degrade\
        consequently ciprofloxacin can be detected in high concentrations in the environment. "',
        answer: true,
        explanation: "This is true. Ciprofloxacin is a broad-spectrum antibiotic that is active against both Gram-positive and Gram-negative bacteria.",
        reference: "Reference: <a href='https://www.amr-insights.eu/what-steps-are-companies-taking-to-help-curb-amr-by-manufacturing-responsibly/' target='_blank' class='font-bold text-green-500 hover:text-green-700'>AMR insights<s/a>",
      },
    {
        question: '"In a patient who experienced a full body rash (with no facial involvement, resolved with topical corticosteroids) to\
        amoxicillin 5 years ago for an upper respiratory tract infection, it is not safe to give cefazolin."',
        answer: false,
        explanation: "This is false. The patient can safely receive cefazolin.",
        reference: "Reference: <a href='https://www.jaci-inpractice.org/article/S2213-2198%2817%2930501-9/pdf' target='_blank' class='font-bold text-green-500 hover:text-green-700'>Therapeutic Guidelines - Cross-reactivity between beta-lactams</a>",
      },
    {
        question: '"Escherichia coli is a Gram-negative bacillus and the most common cause of urinary tract\
        infections. Resistance to amoxicillin is common, and some isolates may produce extended-spectrum beta-lactamases."',
        answer: true,
        explanation: "This is true",
        reference: "Reference: <a href='https://www.ncbi.nlm.nih.gov/books/NBK564298/ ' target='_blank' class='font-bold text-green-500 hover:text-green-700'>NCBI book</a>",
      },
      {
        question: '"Coloured mucous is a sign of a bacterial infection."',
        answer: false,
        explanation: "Coloured mucous is not always a sign of bacterial infection. It can be a\
        sign that your immune system is working to fight your infection and\
        clean up the damaged tissues. ",
        reference: "Reference: <a href='https://www.safetyandquality.gov.au/publications-and-resources/resource-library/aura-2021-consumer-trifold-do-i-really-need-antibiotics ' target='_blank' class='font-bold text-green-500 hover:text-green-700'>safetyandquality.gov</a>",
      },
      {
        question: '"Early antibiotic exposure is associated with an increased risk of chronic disease later\
        in life, such as allergy, atopic dermatitis, coeliac disease, diabetes, and obesity."',
        answer: true,
        explanation: "This is true. Early antibiotic exposure is associated with an increased risk of chronic disease later",
        reference: "Reference: <a href='https://www.safetyandquality.gov.au/publications-and-resources/resource-library/antimicrobial-stewardship-australian-health-care' target='_blank' class='font-bold text-green-500 hover:text-green-700'>safetyandquality.gov</a>",
      },
      {
        question: "When given a box or bottle of antibiotics, you must continue taking antibiotics until it has finished. ",
        answer: false,
        explanation: "Antibiotics should be taken for the number of days specified by the\
        prescriber. The pack sizes of antibiotics often don’t match your\
        prescribed duration, so there will often be leftovers. These should be\
        returned to the pharmacy to be disposed of appropriately.\
        The longer you are exposed to antibiotics, the more likely you are to pick up a resistant bacterium. ",
        reference: "Reference: <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6736742/  ' target='_blank' class='font-bold text-green-500 hover:text-green-700'>ncbi.nlm.nih.gov</a>",
      },
      {
        question: "Antibiotics can be safely disposed of down the drain. ",
        answer: false,
        explanation: "Antibiotics disposed of in waterways can impact antimicrobial\
        resistance by contaminating the environment. ",
        reference: "Reference: <a href='https://www.cdc.gov/drugresistance/environment.html' target='_blank' class='font-bold text-green-500 hover:text-green-700'>cdc.gov</a>",
      },
      {
        question: "Antibiotics can resolve most dental infections. ",
        answer: false,
        explanation: "In most cases, dental treatment alone is effective. ",
        reference: "Reference: <a href='https://www.safetyandquality.gov.au/publications-and-resources/resource-library/options-implementation-ams-primary-care-dental-practice' target='_blank' class='font-bold text-green-500 hover:text-green-700'>safetyandquality.gov.</a>",
      },
    
    
    // ... add more questions as needed
  ];

  export default quizPhysicians;