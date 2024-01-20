import ProjectCard from "./ProjectCard"

const projects = [
    {
        'title': 'divide la cuenta',
        'link': 'https://localhost:5173',
        'description': 'Interesting project',
    },
    {
        'title': 'divide la cuenta',
        'link': 'https://localhost:5173',
        'description': 'Interesting project',
    },
    {
        'title': 'divide la cuenta',
        'link': 'https://localhost:5173',
        'description': 'Interesting project',
    },
    {
        'title': 'divide la cuenta',
        'link': 'https://localhost:5173',
        'description': 'Interesting project',
    },
    {
        'title': 'divide la cuenta',
        'link': 'https://localhost:5173',
        'description': 'Interesting project',
    },
]
console.log(projects);

export default function ProjectGrid() {
    return (
        <>
            <div id="contact" className="mt-8 py-32 dark:bg-gray-900 mx-auto w-5/6">
                <h2 className="text-3xl text-white text-2xl font-extrabold w-fit">These are some of the projects I have worked on so far:</h2>
                <div className="rounded-lg p-8 mt-10 flex gap-x-6 overflow-scroll  sm:grid sm:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {projects?.map((project) => (
                        <ProjectCard key={crypto.randomUUID()} title={project.title} />
                    ))}
                </div>
            </div>

        </>
    )
}