import './App.css'

import Footer from './components/Footer'
import AStar from './components/implementations/astar'
import MOS from './components/implementations/mos'
import { useEffect, useRef, useState } from 'react'
import Hungarian from './components/implementations/hungarian'
import KDTree from './components/implementations/kdtree'
import PageRank from './components/implementations/pagerank'
import Trie from './components/implementations/trie'
import MMI from './components/implementations/mmiflt'

const sections = ['Introduction', 'A* Path Finding', "Analytics with MO's Algorithm", "Player-Server Assignment", "Spatial Indexing with KD Trees", "Page Rank for Ranking", "Word Lookup with Tries", "Cryptography with MMI and Fermat's Little Theorem", "References"]


function App() {

  return (
    <>
      <main className='w-screen h-screen grid grid-cols-[1fr_2.5fr] grid-rows-1 bg-white dark:bg-[#070714] font-outfit'>
        <aside className='relative h-full flex flex-col items-end justify-center'>
          <nav className='pr-6'>
            <ul className='space-y-2 text-right text-xl'>
              {sections.map((section) => (
                <li
                  key={section}
                  className={`cursor-pointer text-gray-500 hover:underline`}
                >
                  <a href={`#${section}`}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  <div className="absolute bottom-4 right-6">
    <Footer />
  </div>
          <div className='absolute w-[1px] h-screen bg-gradient-to-b from-transparent via-[#fe5953] to-transparent left-2/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none'></div>
        </aside>

        <section className='overflow-y-scroll h-full p-4 hide-scrollbar dark:text-neutral-200 text-xl'>
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
                src={`${import.meta.env.BASE_URL}valve.svg`}
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

            <div className='flex flex-row'>
              <div id='A* Path Finding' className='max-w-3/5'>
                <h3 className='font-normal text-2xl'>1. A* Path Finding</h3>
                <p className='pl-4 pt-4'>
                  A* is a well-known pathfinding and graph traversal algorithm that efficiently finds the shortest path between two nodes. It combines the strengths of Dijkstra’s algorithm (which finds the lowest cost path) and greedy best-first search (which uses a heuristic to guide the search). A* evaluates nodes using the function f(n) = g(n) + h(n), where g(n) is the actual cost from the start node and h(n) is the estimated cost to the goal. This balance of cost and heuristic makes it both optimal and efficient in many real-world scenarios.
                </p>
                <p className='pl-4 pt-4'>
                  Valve can apply A* in various aspects of game development. In titles like Half-Life, Left 4 Dead, or Dota 2, A* may be used to power the movement and decision-making of AI-controlled characters, enabling them to find realistic and responsive paths through game environments. The algorithm ensures that entities can navigate around obstacles, reach objectives, and adapt to dynamic world changes.
                </p>
                <p className='pl-4 pt-4'>
                  In terms of complexity, A* has a time complexity of O(E) where E is the number of edges explored, and the performance heavily depends on the quality of the heuristic function used. With a consistent heuristic, A* is guaranteed to find the shortest path. The space complexity can be high (O(V)) due to storage of node information, but for many game maps or preprocessed environments, this tradeoff is acceptable for the path quality it provides.
                </p>
                <br />
                <AStar />
              </div>
              <div className='flex flex-col justify-baseline items-center w-full'>
                <img src={`${import.meta.env.BASE_URL}images/astar.png`} alt="astar" width={384} className='border border-[#fe5953] rounded-lg mt-10' />
                <caption className='text-sm pt-1'><b>Fig 1:</b> Showcasing the working of A*</caption>
              </div>
            </div>

            <br />
            <div className='flex flex-row'>

              <div id="Analytics with MO's Algorithm" className='max-w-3/5'>
                <h3 className='font-normal text-2xl'>2. Analytics with MO's Algorithm</h3>
                <p className='pl-4 pt-4'>
                  Mo’s Algorithm is an efficient solution for answering multiple range queries (like sum, frequency, or count queries) on a static array when all queries are known in advance. It applies square root decomposition to reorganize the queries in a way that reduces the number of changes required between ranges, achieving a time complexity of approximately O((N + Q)√N).
                </p>
                <p className='pl-4 pt-4'>
                  Although not commonly used in everyday applications, it is well-suited for offline analytics where the dataset doesn't change during processing. In Valve’s context, this can be used for analyzing telemetry data collected during gameplay. For example, querying heatmaps of player positions, usage patterns of weapons or items, or tracking in-game events across time intervals.
                </p>
                <p className='pl-4 pt-4'>
                  Using Mo’s Algorithm or similar techniques, Valve could process large sets of gameplay logs more efficiently, enabling insights into user behavior, balance tuning, and feature impact analysis, especially when working with fixed logs and needing to run numerous range-based analyses.
                </p>
                <br />
                <MOS />
              </div>
              <div className='flex flex-col justify-baseline items-center w-full'>
                <img src={`${import.meta.env.BASE_URL}images/mos.jpg`}  alt="mos" width={384} className='border border-[#fe5953] rounded-lg mt-10' />
                <caption className='text-sm pt-1'><b>Fig 2:</b> Partition through square root decomposition</caption>
              </div>
            </div>

            <br />

            <div className='flex flex-row'>

              <div id='Player-Server Assignment' className='max-w-3/5'>
                <h3 className='font-normal text-2xl'>
                  3. Player-Server Assignment
                </h3>
                <p className='pl-4 pt-4'>
                  The Hungarian Algorithm solves the assignment problm, where items from one set must be assigned to another in a way that minimizes total cost. In theory, this could be applied to assigning players to servers based on criteria like latency, proximity, or load balancing.
                </p>
                <p className='pl-4 pt-4'>
                  In Valve’s context, this might theoretically be applied to assign players to game servers. Each player could be matched with a server based on a cost matrix that considers factors like latency, server load, geographic proximity, or even network stability. The Hungarian Algorithm would then select the best global arrangement of player-server pairs that minimizes total cost.
                </p>
                <p className='pl-4 pt-4'>
                  However, its O(n³) time complexity makes it less suitable for real-time or large-scale matchmaking scenarios. While the algorithm ensures optimality, Valve is more likely to rely on faster heuristics or distributed strategies for scalability when dealing with thousands of players connecting simultaneously.
                </p>
                <br />
                <Hungarian />
              </div>
            </div>

            <br />

            <div className='flex flex-row'>

              <div id='Spatial Indexing with KD Trees' className='max-w-3/5'>
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
                <br />
                <KDTree />
              </div>
              <div className='flex flex-col justify-baseline items-center w-full'>
                <img src={`${import.meta.env.BASE_URL}images/kdtree.png`}  alt="kdtree" width={512} className='border border-[#fe5953] rounded-lg mt-10' />
                <caption className='text-sm pt-1'><b>Fig 3:</b> 2D Tree Visualization</caption>
              </div>
            </div>

            <br />

            <div className='flex flex-row'>

              <div id='Page Rank for Ranking' className='max-w-3/5'>
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
                <br />
                <PageRank />
              </div>
            </div>

            <br />

            <div className='flex flex-row'>

              <div id='Word Lookup with Tries' className='max-w-3/5'>
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
                <br />
                <Trie />
              </div>
              <div className='flex flex-col justify-baseline items-center w-full'>

                <img src={`${import.meta.env.BASE_URL}images/trie2.png`}  alt="trie" width={384} className='border border-[#fe5953] rounded-lg mt-10' />
                <caption className='text-sm pt-1'><b>Fig 4:</b> Example of a Trie</caption>
              </div>
            </div>

            <br />

            <div className='flex flex-row'>

              <div id="Cryptography with MMI and Fermat's Little Theorem" className='max-w-3/5'>
                <h3 className='font-normal text-2xl'>
                  7. Cryptography with MMI and Fermat's Little Theorem
                </h3>
                <p className='pl-4 pt-4'>
                  The Modular Multiplicative Inverse (MMI) of a number a modulo m is a value x such that (a * x) ≡ 1 (mod m). It’s crucial in modular arithmetic, especially in cryptographic systems. If m is a prime number, Fermat’s Little Theorem gives a simple way to compute this inverse.
                </p>
                <p className='pl-4 pt-4'>
                  Valve likely implements digital rights management (DRM), secure communications, and encrypted game assets. Fermat’s theorem and MMIs are foundational to RSA encryption, digital signatures, and license verification. Some examples include:
                  <ul className='list-disc'>
                    <li className='ml-16'>Ensuring only authorized users can decrypt purchased games</li>
                    <li className='ml-16'>Securely validating client-server messages</li>
                    <li className='ml-16'>Performing key exchanges for encrypted multiplayer sessions</li>
                  </ul>
                </p>
                <p className='pl-4 pt-4'>
                  In terms of complexity, due to the usage of fast modular exponentiation, it comes to O(log m). Space wise if it is done iteratively it comes to O(1) whereas in a recursive implementation it takes O(log m) space.
                </p>
                <br />
                <MMI />
              </div>
            </div>
          </div>

          <section id='References'>
            <h2 className='py-8 font-medium text-3xl'>References</h2>
            <ol className='list-decimal ml-16 leading-10'>
              <li>
                <a
                  href="https://theory.stanford.edu/~amitp/GameProgramming/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Amit’s A* Pathfinding for Games
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerearth.com/practice/notes/mos-algorithm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  HackerEarth: Mo's Algorithm
                </a>
              </li>
              <li>
                <a
                  href="https://cp-algorithms.com/graph/hungarian-algorithm.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  CP-Algorithms: Hungarian Algorithm
                </a>
              </li>
              <li>
                <a
                  href="https://www.baeldung.com/cs/k-d-trees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Baeldung: K-D Trees
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/page-rank-algorithm-implementation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  GeeksforGeeks: PageRank Algorithm
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/news/trie-data-structure-implementation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  freeCodeCamp: Trie Data Structure
                </a>
              </li>
              <li>
                <a
                  href="https://cp-algorithms.com/algebra/module-inverse.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  CP-Algorithms: Modular Multiplicative Inverse
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/fermats-little-theorem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  GeeksforGeeks: Fermat’s Little Theorem
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerearth.com/practice/notes/a-search-algorithm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  HackerEarth: A* Search Algorithm
                </a>
              </li>
            </ol>
          </section>

        </section>


      </main>

    </>
  )
}

export default App
