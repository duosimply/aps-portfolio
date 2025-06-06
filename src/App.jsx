import './App.css'
import Header from './components/Header'
import DarkToggle from './components/DarkToggle'
import { useEffect, useRef, useState } from 'react'

const sections = ['Introduction', 'A* Path Finding', "Analytics with MO's Algorithm", "Player-Server Assignment"]

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { threshold: 0.7 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* <Header /> */}
      <main className='w-screen h-screen grid grid-cols-[1fr_1.5fr_1fr] grid-rows-1 bg-[#fdf6e3] dark:bg-[#070714] font-outfit'>
        <aside className='relative h-full flex flex-col items-end justify-center'>
          <nav className='pr-6'>
            <ul className='space-y-2 text-right text-xl'>
              {sections.map((section) => (
                <li
                  key={section}
                  className={`cursor-pointer ${
                    activeSection === section
                      ? 'text-[#fe5953] font-bold'
                      : 'text-gray-500'
                  }`}
                >
                  <a href={`#${section}`}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='absolute w-[1px] h-screen bg-gradient-to-b from-transparent via-[#fe5953] to-transparent left-2/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none'></div>
        </aside>

        {/* Scrollable main content */}
        <section className='overflow-y-scroll h-full p-4 hide-scrollbar dark:text-neutral-200 text-2xl leading-10'>
          <div className='flex flex-col items-start'>
            <h1
              className='text-4xl py-10 font-semibold'
              id='Introduction'
            >
              Hi, I'm Sumedh
            </h1>
            <p className='pl-4'>
              This portfolio contains reflections on how the concepts I learned
              in this course can be applied to real-time applications. For
              illustration purposes, I have chosen Valve Corporation as the
              context.
            </p>
          </div>
          <div id='about-valve'>
            <h2 className='py-8 font-medium text-3xl'>
              About
              <img
                src='valve.svg'
                alt='valve-logo'
                width={100}
                className='inline ml-4 mb-1 bg-white'
              />
            </h2>
            <p className='pl-4'>
              Valve Corporation is an American video game developer, publisher,
              and digital distribution company. It is best known for creating
              Steam, as well as popular game franchises like Portal, Half-Life,
              and Counter-Strike.
            </p>
          </div>
          <div id='objectives'>
            <h2 className='py-8 font-medium text-3xl'>Objectives</h2>
            <p className='pl-4'>Through this exercise, I aim to:</p>
            <ul className='list-disc'>
              <li className='ml-16'>
                Explore the various initiatives and technologies Valve is
                involved in
              </li>
              <li className='ml-16'>
                Identify scenarios and business use cases where the concepts
                from this course could be applied
              </li>
            </ul>
          </div>
          <div id='business-use-cases'>
            <h2 className='py-8 font-medium text-3xl'>Business Use Cases</h2>
            <div id='A* Path Finding'>
              <h3 className='font-normal text-2xl'>1. A* Path Finding</h3>
              <p className='pl-4 pt-4 text-2xl leading-9'>
                A* is a widely used pathfinding algorithm that combines the
                advantages of Dijkstra’s algorithm and greedy best-first search.
                It uses both the actual cost from the start node and a heuristic
                estimate to the goal node to find the shortest path efficiently.
              </p>
              <p className='pl-4 pt-4 text-2xl leading-9'>
                It is commonly used in video games to enable AI-controlled
                entities (like NPCs) to navigate through game environments. The
                algorithm helps characters find optimal or near-optimal paths
                while avoiding obstacles and dynamically responding to the game
                world.
              </p>
              <p className='pl-4 pt-4 text-2xl leading-9'>
                Since Valve develops games, including titles like Half-Life,
                Portal, and Left 4 Dead, they likely use A* or similar
                pathfinding algorithms to handle NPC navigation and movement in
                complex 3D spaces.
              </p>
            </div>
            <br />
            <div id="Analytics with MO's Algorithm">
              <h3 className='font-normal text-2xl'>2. Analytics with MO's Algorithm</h3>
              <p className='pl-4 pt-4 text-2xl leading-9'>
               Mo’s Algorithm is an efficient algorithm used to process multiple range queries (like sum, frequency, or count queries) on a static array in offline mode — meaning all queries are known in advance. It uses square root decomposition to reorder the queries in a way that minimizes the number of operations needed to move between query ranges, achieving a time complexity of approximately O((N + Q)√N).
              </p>
              <p className='pl-4 pt-4 text-2xl leading-9'>
                While it's a niche algorithm, it could be useful in systems like analytics engines. A company like Valve might use similar techniques to process large-scale data offline, such as analyzing:
                <ul className='list-disc'>
                  <li className='ml-16'>
                    Player movement heatmaps
                  </li>
                  <li className='ml-16'>
                    Item usage trends
                  </li>
                  <li className='ml-16'>
                    Combat behavior over time
                  </li>
                </ul>
              </p>
            </div>
            <br />
            <div id='Player-Server Assignment'>
              <h3 className='font-normal text-2xl'>
                3. Player-Server Assignment
              </h3>
              <p className='pl-4 pt-4 text-2xl leading-9'>
                The Hungarian Algorithm solves the assignment problem, where items from one set must be assigned to another in a way that minimizes total cost. In theory, this could be applied to assigning players to servers based on criteria like latency, proximity, or load balancing.
              </p>
              <p className='pl-4 pt-4 text-2xl leading-9'>
                However, while the algorithm guarantees an optimal solution, it may not be practical for real-time or large-scale systems due to its O(n³) time complexity. In real-world applications like those at Valve, more scalable and faster heuristic or approximate approaches are likely used instead.
              </p>
            </div>
          </div>
        </section>

        {/* Optional third column */}
        <div className='p-4'>
          <DarkToggle/>
        </div>
      </main>
    </>
  )
}

export default App
