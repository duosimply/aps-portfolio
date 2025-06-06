import './App.css'
import Header from './components/Header'
import DarkToggle from './components/DarkToggle'
import AStar from './components/implementations/astar'
import MOS from './components/implementations/mos'
import { useEffect, useRef, useState } from 'react'
import Hungarian from './components/implementations/Hungarian'
import KDTree from './components/implementations/kdtree'
import PageRank from './components/implementations/pagerank'
import Trie from './components/implementations/trie'

const sections = ['Introduction', 'A* Path Finding', "Analytics with MO's Algorithm", "Player-Server Assignment", "Spatial Indexing with KD Trees", "Page Rank for Ranking", "Word Lookup with Tries"]

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { threshold: 0.1 }
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
                  className={`cursor-pointer ${activeSection === section
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
        <section className='overflow-y-scroll h-full p-4 hide-scrollbar dark:text-neutral-200'>
          <div className='flex flex-col items-start'>
            <h1
              className='text-4xl py-10 font-semibold'
              id='Introduction'
            >
              Hi, I'm Sumedh
            </h1>
            <p className='pl-4'>
              This portfolio contains reflections on how the concepts I learned
              in the course Algorithmic Problem Solving can be applied to real-time applications. For
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
              <p className='pl-4 pt-4'>
                A* is a widely used pathfinding algorithm that combines the
                advantages of Dijkstra’s algorithm and greedy best-first search.
                It uses both the actual cost from the start node and a heuristic
                estimate to the goal node to find the shortest path efficiently.
              </p>
              <p className='pl-4 pt-4'>
                It is commonly used in video games to enable AI-controlled
                entities (like NPCs) to navigate through game environments. The
                algorithm helps characters find optimal or near-optimal paths
                while avoiding obstacles and dynamically responding to the game
                world.
              </p>
              <p className='pl-4 pt-4'>
                Since Valve develops games, including titles like Half-Life,
                Portal, and Left 4 Dead, they likely use A* or similar
                pathfinding algorithms to handle NPC navigation and movement in
                complex 3D spaces.
              </p>
              <br />
              The following is an implementation of the algorithm:
              <AStar />
            </div>
            <br />
            <div id="Analytics with MO's Algorithm">
              <h3 className='font-normal text-2xl'>2. Analytics with MO's Algorithm</h3>
              <p className='pl-4 pt-4'>
                Mo’s Algorithm is an efficient algorithm used to process multiple range queries (like sum, frequency, or count queries) on a static array in offline mode — meaning all queries are known in advance. It uses square root decomposition to reorder the queries in a way that minimizes the number of operations needed to move between query ranges, achieving a time complexity of approximately O((N + Q)√N).
              </p>
              <p className='pl-4 pt-4'>
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
              <MOS />
            </div>
            <br />
            <div id='Player-Server Assignment'>
              <h3 className='font-normal text-2xl'>
                3. Player-Server Assignment
              </h3>
              <p className='pl-4 pt-4'>
                The Hungarian Algorithm solves the assignment problem, where items from one set must be assigned to another in a way that minimizes total cost. In theory, this could be applied to assigning players to servers based on criteria like latency, proximity, or load balancing.
              </p>
              <p className='pl-4 pt-4'>
                However, while the algorithm guarantees an optimal solution, it may not be practical for real-time or large-scale systems due to its O(n³) time complexity. In real-world applications like those at Valve, more scalable and faster heuristic or approximate approaches are likely used instead.
              </p>
              <Hungarian />
            </div>
            <br />
            <div id='Spatial Indexing with KD Trees'>
              <h3 className='font-normal text-2xl'>
                4. Spatial Indexing with KD Trees
              </h3>
              <p className='pl-4 pt-4'>
                A KD Tree is a space-partitioning data structure used to efficiently organize and search points in a k-dimensional space. It's most commonly used for nearest neighbor searches, range queries, and collision detection in applications involving 2D or 3D spatial data. The tree recursively splits the space along one dimension at a time, which allows it to narrow down search space logarithmically.
              </p>
              <p className='pl-4 pt-4'>
                Valve could use KD Trees in several parts of its technology stack. In game engines like Source, KD Trees can power fast hit detection, raycasting, and visibility checks for AI and rendering systems. In VR systems like the Valve Index, KD Trees help track objects and optimize interaction by quickly finding what's near the user’s hands or head.
              </p>
              <p className='pl-4 pt-4'>
                In the average case, KD Trees offer O(log n) time complexity for insertions and nearest neighbor queries, and O(n^1–1/k) for range searches in k dimensions. However, performance can degrade to O(n) in the worst case (especially if unbalanced). The space complexity is O(n) since each point is stored once. KD Trees are most efficient when the dataset is static or infrequently updated and queries are read-heavy, which is the case in many real-time game and VR applications.
              </p>
              <KDTree />
            </div>
            <br />
            <div id='Page Rank for Ranking'>
              <h3 className='font-normal text-2xl'>
                5. Page Rank for Ranking
              </h3>
              <p className='pl-4 pt-4'>
                PageRank is a graph-based algorithm originally developed by Google to rank web pages based on their importance. The idea is that a page is important if other important pages link to it. Mathematically, it's an iterative method that calculates a score for each node based on incoming edges, effectively solving for the principal eigenvector of the link matrix.
              </p>
              <p className='pl-4 pt-4'>
                Valve could use PageRank in several key areas. For example, on Steam, it could rank games, mods, or user-generated content by importance — not just based on popularity, but also based on how many “important” users or curators engage with them. In multiplayer matchmaking, PageRank might help prioritize servers or players that are central in a network of successful, low-latency, or cooperative games. It could even assist in recommendation systems or community hub content surfacing.
              </p>
              <p className='pl-4 pt-4'>
                PageRank typically converges in O(k·(V + E)) time, where V is the number of nodes, E the edges, and k the number of iterations until convergence (often 20–100 for good accuracy). It requires O(V) space to store ranks and O(E) to store the graph. Sparse graphs (common in real-world networks) keep this efficient. It's scalable, parallelizable, and works very well for graphs with natural hubs — like game communities or Steam's content network.
              </p>
              <PageRank />
            </div>
            <br />
            <div id='Word Lookup with Tries'>
              <h3 className='font-normal text-2xl'>
                6. Word Lookup with Tries
              </h3>
              <p className='pl-4 pt-4'>
                A Trie is a tree-based data structure designed for storing and searching strings, especially efficient for prefix-based operations. Each node represents a single character, and words are formed by traversing from the root to a terminal node. It's widely used in applications requiring auto-completion, word dictionaries, and string filtering.
              </p>
              <p className='pl-4 pt-4'>
                Valve can make use of Tries in several areas:
                <ul className='list-disc'>
                  <li className='ml-16'>Steam Search: For quickly suggesting games, genres, or developers as users type.</li>
                  <li className='ml-16'>In-Game Console or Chat: For supporting auto-completion of commands, weapon names, or usernames.</li>
                  <li className='ml-16'>Moderation Tools: To store and check against offensive or banned terms in real-time with high efficiency.</li>
                  <li className='ml-16'>Workshop Tags or Localization: Matching language tokens or content tags rapidly during upload or filtering.</li>
                </ul>
              </p>
              <p className='pl-4 pt-4'>
                Tries offer highly efficient string operations, with all core functions (insertion, exact search, and prefix lookup) taking O(k) time, where k is the length of the input word or prefix. This makes them ideal for use cases involving lots of short strings, like usernames or commands. Space complexity is O(σ × k × n) in the worst case, where σ is the alphabet size (e.g. 26 for lowercase English), k is average word length, and n is the number of words, though in practice, shared prefixes significantly reduce redundancy.
              </p>
              <Trie />
            </div>
          </div>
        </section>

        {/* Optional third column */}
        <div className='p-4'>
          <DarkToggle />
        </div>
      </main>
    </>
  )
}

export default App
