const tex_file = 
`\\documentclass{resume}

\\begin{document}

% --------- Contact Information -----------
\\introduction[
    fullname={_name},
    email={_email},
    phone={!phone},
    linkedin={!linkedin},
    github={!github}
]

% --------- Summary -----------
\\summary{Senior mechanical engineering student with internship experience in medical device manufacturing and product development. Project experience includes applications of software and hardware. Seeking full-time position May 2020 in medical device manufacturing, pharmaceutical production, and other FDA-regulated industries. }

% --------- Education ---------
\\begin{educationSection}{Education}
    \\educationItem[
        university={Arizona State University, Tempe, AZ},
        college={Barrett, The Honors College},
        graduation={May 2020},
        grade={3.82 GPA},
        program={B.S.E., Mechanical Engineering},
        coursework={Hardware Design Languages and Programmable Logic, Advanced Excel in Business},
    ]
\\end{educationSection}

% --------- Skills -----------
\\begin{skillsSection}{Technical Skills}
    \\skillItem[
        category={Data Analysis and Statistics},
        skills={JMP, Minitab}
    ] \\\\
    \\skillItem[
        category={Design and Modeling Tools},
        skills={SOLIDWORKS, LabVIEW, MATLAB, Microsoft Office}
    ] \\\\
    \\skillItem[
        category={Programming},
        skills={Python, C, C++}
    ] \\\\
    \\skillItem[
        category={Certifications},
        skills={National Instruments Certified LabVIEW Associate Developer (CLAD) – August 2019}
    ]
\\end{skillsSection}

% --------- Experience -----------
\\begin{experienceSection}{Professional Experience}
    \\experienceItem[
        company={Stryker Solutions},
        location={Phoenix, AZ},
        position={Research \\& Dev Development Intern},
        duration={May 2019 – Aug 2019}
    ]
    \\begin{itemize}
        \\itemsep -6pt {}
        \\item Applied measurement system analysis (MSA) to qualify relocated test equipment (JMP, Python)
        \\item Authored three technical reports for relocated packaging equipment, following IQOQPQ guides (JMP, Excel)
    \\end{itemize}

    \\experienceItem[
        company={Med Apps},
        location={Scottsdale, AZ},
        position={Quality Engineering Intern},
        duration={May 2018 – Aug 2018}
    ]
    \\begin{itemize}
        \\itemsep -6pt {}
        \\item Assessed equivalency of proposed alternate plastic packaging material (Minitab, Excel)
        \\item Created and delivered presentations to train field sales representatives on new product features (PowerPoint)
    \\end{itemize}

\\end{experienceSection}

% --------- Projects -----------
\\begin{experienceSection}{Academic projects}
    \\projectItem[
        title={Hand Cycle for Polio Victims},
        duration={Fall 2019 – Spring 2020},
        keyHighlight=Collaborated in a team of three to design model of custom hand cycle for polio victims (SOLIDWORKS).
    ]
    \\begin{itemize}
        \\vspace{-0.5em}
        \\itemsep -6pt {}
        \\item Developed team schedule, including quality measurement for each major milestone (Microsoft Project)
        \\item Ensured team compliance to Design Control Procedures according to Code of Federal Regulations (CFR)
        \\item Recognized by faculty audience as “Best Presentation” out of 15 teams
    \\end{itemize}

    \\projectItem[
        title=Sensor for Quadriplegic Patients,
        duration=Spring 2019,
        keyHighlight=Led team of three to design and develop a mouse-like device to allow quadriplegic patients to use websites.
    ]
    \\begin{itemize}
        \\vspace{-0.5em}
        \\itemsep -6pt {}
        \\item Assessed range-of-motion data to determine feasible solutions (Python)
        \\item Created device to detect muscle flexion in neck to control the mouse click (Arduino, FPGA)
    \\end{itemize}
\\end{experienceSection}

% --------- Other work experience -----------
\\begin{experienceSection}{Other work experience}
    \\experienceItem[
        company={Arizona State University},
        location={Tempe, AZ},
        position={Tutor (10 hours/week)},
        duration={Aug 2018 – May 2019}
    ]
    \\begin{itemize}
        \\vspace{-0.2em}
        \\itemsep -6pt {}
        \\item Tutored 10-15 undergraduate engineering students per week in MATLAB programming and math coursework
    \\end{itemize}

    \\experienceItem[
        company={Kohl's},
        location={Gilbert, AZ},
        position={Sales Associate, Jewelry Department (16-24 hours/week)},
        duration={Aug 2017 – Dec 2017}
    ]
    \\begin{itemize}
        \\vspace{-0.2em}
        \\itemsep -6pt {}
        \\item Achieved \\#2 highest selling associate within one month of hire date
    \\end{itemize}
\\end{experienceSection}

% --------- Activities -----------
\\begin{experienceSection}{Activities}
    \\projectItem[
        title={ASU Society of Women Engineers (SWE)},
        keyHighlight={Multiple leadership roles, including vice-president and industry relations chair (300 members{,} \\$75k annual budget)},
        duration={Aug 2017 – Present}
    ]
    \\begin{itemize}
        \\vspace{-0.5em}
        \\itemsep -6pt {}
        \\item Tutored 10-15 undergraduate engineering students per week in MATLAB programming and math coursework
        \\item Organized 2018 annual conference participation, including 8 student poster submissions
    \\end{itemize}
\\end{experienceSection}

\\end{document}`;

export default tex_file;