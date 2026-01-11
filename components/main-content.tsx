import ProjectsActionBar from "./ProjectsActionBar";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsList from "./ProjectsList";

export default function MainContent() {
    return (
        <div className="flex flex-1 flex-col m-2 border rounded-lg">
            {/* ProjectsHeader */}
            <ProjectsHeader />
            {/* ProjectsActionBar */}
            <ProjectsActionBar />
            {/* ProjectsList */}
            <ProjectsList />
        </div>
    )
}