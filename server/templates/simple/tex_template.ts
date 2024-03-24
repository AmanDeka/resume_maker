const simple_template = {
    'start':`\\documentclass{resume}

    \\begin{document}`,

    'introduction':`\\introduction[
        fullname={_name},
        email={_email},
        phone={_phone},
        linkedin={_linkedin},
        github={_github}
    ]`,

    'summary':`\\summary{_summary}`,


    'end':`\\end{document}`

}