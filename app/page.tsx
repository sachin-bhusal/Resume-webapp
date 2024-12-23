import { FC } from 'react'
import { Mail, Phone, Globe, Linkedin, Github } from 'lucide-react'

const MinimalResume: FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sachin Bhusal</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            bhusalsachin189@gmail.com
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            +1 571-672-1503
          </div>
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-2" />
            https://bhusalsachin.com.np
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" />
            linkedin.com/in/sachin-bhusal
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" />
            github.com/sachin-bhusal
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">Education</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <strong>Rowan University, Bachelors in Computer Science</strong>
            <span>2024-2028 (Expected)</span>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <strong>Prasadi Academy, Lalitpur - High School</strong>
            <span>GPA: 3.75</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <strong>KMC School, Kathmandu - Secondary School</strong>
            <span>GPA: 3.85</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">Work Experience</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <strong>Office Assistant & Graphic Designer, Scholars Shares Education</strong>
            <span>July 2022 - July 2023</span>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>Designed posters, brochures, and flyers for advertising purposes</li>
            <li>Created and designed graphics for social media posts</li>
            <li>Managed data entry and student courses</li>
            <li>Handled incoming and outgoing mails and phone calls</li>
            <li>Maintained physical and digital records of the place</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <strong>Barista, Chicken Station</strong>
            <span>September 2023 - June 2024</span>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>Brewed hand coffee, coffee arts, and occasionally prepared mocktails</li>
            <li>Helped to stock the bar with new bottles of drinks</li>
            <li>Looked after customers and took orders while short-staffed</li>
            <li>Helped to close the bar and restaurant</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Technical Skills:</strong>
            <p>Python, Java, HTML, Git & GitHub, LaTeX, Arduino Programming</p>
          </div>
          <div>
            <strong>Soft Skills:</strong>
            <p>Leadership, Communication, Public Speaking, Problem-Solving</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">Projects</h2>
        <div className="mb-2">
          <div className="flex justify-between">
            <strong>Prepify (ongoing)</strong>
            <span>Oct, 2024</span>
          </div>
          <p className="text-sm">AI Interviewer for interview preparation using Nvidia Omniverse Audio2Face and Headless A2F</p>
        </div>
        <div className="mb-2">
          <div className="flex justify-between">
            <strong>Tarot Card Game</strong>
            <span>May, 2024</span>
          </div>
          <p className="text-sm">GUI for Tarot card readings using Python and Tkinter library</p>
        </div>
        <div>
          <div className="flex justify-between">
            <strong>Graph Plotter</strong>
            <span>June, 2024</span>
          </div>
          <p className="text-sm">Lab report generator using Pandas, matplotlib, and OOP</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">Awards</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Brown and Gold Scholarship</li>
          <li>Rowan University International Scholarship</li>
        </ul>
      </section>
    </div>
  )
}

export default MinimalResume

