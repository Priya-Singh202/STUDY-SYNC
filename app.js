/**
 * STUDY SYNC - Full-Stack Client Engine for GitHub Pages
 * Features: Auth & Streaks, B.Tech Notes Sharing, PYQ Archive, 
 * Timed Mock Tests with Explanations, Pomodoro Timer with Audio Alert.
 */

// ==========================================
// 1. DEFAULT B.TECH ACADEMIC DATA
// ==========================================

const BTECH_NOTES = [
    {
        id: "note-dsa-trees",
        title: "Data Structures & Algorithms - Complete Exam Digest",
        subject: "Data Structures",
        branch: "CSE",
        semester: "Sem 3",
        uploader: "Aarav Sharma",
        upvotes: 48,
        tags: ["DSA", "Trees", "Graphs", "DP"],
        description: "Covers Binary Search Trees, AVL balance rotations, Graph traversals (BFS, DFS, Dijkstra), and Dynamic Programming tabulation templates with solved university problems.",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### Data Structures & Algorithms (B.Tech Sem 3)

#### 1. Binary Search Trees & AVL Balance
- **BST Property:** For every node $X$, all elements in left subtree $< X$, and all elements in right subtree $> X$.
- **AVL Tree Rotations:** 
  - LL Rotation (Right rotation at parent)
  - RR Rotation (Left rotation at parent)
  - LR Rotation (Left rotate child, right rotate parent)
  - RL Rotation (Right rotate child, left rotate parent)

#### 2. Graph Algorithms
- **Dijkstra's Algorithm:** Greedy shortest path for non-negative edge weights. Time: $O((V + E) \\log V)$ using Min-Heap.
- **Bellman-Ford:** Computes shortest paths with negative edges. Detects negative weight cycles. Time: $O(V \\cdot E)$.

#### 3. Dynamic Programming Rules
1. Identify optimal substructure.
2. Define overlapping subproblems.
3. Memoization (Top-Down) vs Tabulation (Bottom-Up).`,
        comments: [
            { user: "Priya Patel", text: "The AVL rotation diagrams are extremely clear, helped me score in Mid-Sem!", date: "2 days ago" },
            { user: "Rohan Verma", text: "Please add topological sort examples for DAGs too.", date: "1 day ago" }
        ]
    },
    {
        id: "note-os-deadlocks",
        title: "Operating Systems - Concurrency, Scheduling & Memory",
        subject: "Operating Systems",
        branch: "CSE",
        semester: "Sem 4",
        uploader: "Neha Gupta",
        upvotes: 39,
        tags: ["OS", "Deadlocks", "Paging", "Semaphores"],
        description: "Concise cheat sheet covering Banker's Algorithm, Semaphore mutual exclusion, Virtual Memory Paging, and Belady's Anomaly proofs.",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### Operating Systems Core Notes (B.Tech Sem 4)

#### 1. Coffman's 4 Deadlock Conditions
1. **Mutual Exclusion:** Resources cannot be shared simultaneously.
2. **Hold & Wait:** Process holding resources requests additional ones.
3. **No Preemption:** Resources can only be released voluntarily.
4. **Circular Wait:** Closed chain of processes waiting for each other.

#### 2. Banker's Algorithm (Deadlock Avoidance)
- Vectors: $Available[m]$, $Max[n][m]$, $Allocation[n][m]$, $Need[n][m]$.
- Condition: $Need[i][j] = Max[i][j] - Allocation[i][j]$.

#### 3. Page Replacement Algorithms
- **FIFO:** Suffers from Belady's Anomaly (increasing frames can increase page faults).
- **LRU:** Stack-based, immune to Belady's Anomaly.
- **Optimal (OPT):** Replaces page not needed for longest future duration.`,
        comments: [
            { user: "Karthik Rao", text: "Banker's Algorithm formula is spot on. Thank you!", date: "3 days ago" }
        ]
    },
    {
        id: "note-dbms-sql",
        title: "Database Management Systems (DBMS) - Normalization & ACID",
        subject: "DBMS",
        branch: "IT",
        semester: "Sem 4",
        uploader: "Ananya Iyer",
        upvotes: 56,
        tags: ["DBMS", "SQL", "Normalization", "Transactions"],
        description: "Exhaustive step-by-step breakdown of 1NF, 2NF, 3NF, BCNF decomposition with sample schemas, plus ACID transactions and indexing.",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### DBMS Normalization Digest (B.Tech Sem 4)

#### 1. Relational Normalization Forms
- **1NF:** Eliminate repeating groups, all attributes must be atomic.
- **2NF:** In 1NF + No partial dependencies (every non-prime attribute fully functionally dependent on Candidate Key).
- **3NF:** In 2NF + No transitive dependencies ($X \\to Y$ where $Y$ is non-prime and $X$ is not a superkey).
- **BCNF:** For every functional dependency $X \\to Y$, $X$ must be a Super Key.

#### 2. Transaction ACID Properties
- **Atomicity:** All-or-nothing execution.
- **Consistency:** Database transitions from one valid state to another.
- **Isolation:** Concurrent transactions execute without mutual interference.
- **Durability:** Committed updates survive crashes permanently.`,
        comments: [
            { user: "Vikas Dubey", text: "The BCNF vs 3NF comparison table solved all my doubts.", date: "4 days ago" }
        ]
    },
    {
        id: "note-networks-tcp",
        title: "Computer Networks - Complete OSI & TCP/IP Model",
        subject: "Computer Networks",
        branch: "CSE",
        semester: "Sem 5",
        uploader: "Siddharth Jain",
        upvotes: 31,
        tags: ["Networks", "OSI", "TCP/IP", "Subnetting"],
        description: "Header formats of IPv4 vs IPv6, TCP 3-way handshake, Subnetting CIDR calculations, and Distance Vector vs Link State Routing.",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### Computer Networks Handbook (B.Tech Sem 5)

#### 1. TCP 3-Way Handshake Connection
1. **Client -> Server:** SYN (seq = x)
2. **Server -> Client:** SYN-ACK (seq = y, ack = x + 1)
3. **Client -> Server:** ACK (seq = x + 1, ack = y + 1)

#### 2. IPv4 Subnetting (CIDR)
- Subnet mask determines Network ID vs Host ID.
- Formula for available host IPs: $2^{(32 - \\text{CIDR})} - 2$ (subtract network & broadcast addresses).`,
        comments: []
    },
    {
        id: "note-ece-comm",
        title: "Digital Communication & Signals - Formulas & Derivations",
        subject: "Digital Communication",
        branch: "ECE",
        semester: "Sem 5",
        uploader: "Rahul Nair",
        upvotes: 27,
        tags: ["ECE", "Modulation", "PCM", "Fourier"],
        description: "Pulse Code Modulation (PCM), Nyquist Sampling Theorem, QAM constellations, and Signal-to-Noise Ratio (SNR) derivations for semester finals.",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### Digital Communication (B.Tech ECE Sem 5)

#### 1. Nyquist Sampling Theorem
- To reconstruct a continuous bandlimited signal of maximum frequency $f_m$, the sampling rate $f_s$ must satisfy:
  $$f_s \\ge 2f_m$$
- If $f_s < 2f_m$, aliasing occurs. Antialiasing low-pass filter must precede sampling.

#### 2. Quantization Noise in PCM
- Signal-to-Quantization-Noise Ratio:
  $$\\text{SQNR (dB)} = 1.76 + 6.02n$$
  where $n$ is the number of bits per sample.`,
        comments: []
    },
    {
        id: "note-me-thermo",
        title: "Thermodynamics & Steam Turbines - Rankine Cycle",
        subject: "Thermodynamics",
        branch: "ME",
        semester: "Sem 3",
        uploader: "Amit Deshmukh",
        upvotes: 22,
        tags: ["ME", "Rankine", "Entropy", "Carnot"],
        description: "First & Second Law of Thermodynamics, Rankine cycle efficiency derivations, reheat and regeneration modifications with T-s diagrams.",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### Engineering Thermodynamics (B.Tech ME Sem 3)

#### 1. Second Law & Clausius Inequality
$$\\oint \\frac{\\delta Q}{T} \\le 0$$
- Value $= 0$ for reversible cycles, $< 0$ for irreversible cycles.

#### 2. Ideal Rankine Cycle Efficiency
$$\\eta_{\\text{thermal}} = \\frac{W_{\\text{net}}}{Q_{\\text{in}}} = \\frac{(h_1 - h_2) - (h_4 - h_3)}{h_1 - h_4}$$`,
        comments: []
    }
];

const BTECH_PYQS = [
    {
        id: "pyq-dsa-2024",
        title: "Data Structures & Algorithms Final End-Semester Exam 2024",
        subject: "Data Structures",
        branch: "CSE",
        semester: "Sem 3",
        year: "2024",
        examType: "End-Sem",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        downloads: 412
    },
    {
        id: "pyq-os-2023",
        title: "Operating Systems Mid-Semester Examination Paper 2023",
        subject: "Operating Systems",
        branch: "CSE",
        semester: "Sem 4",
        year: "2023",
        examType: "Mid-Sem",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        downloads: 289
    },
    {
        id: "pyq-dbms-2024",
        title: "Database Management Systems End-Sem Question Paper 2024",
        subject: "DBMS",
        branch: "IT",
        semester: "Sem 4",
        year: "2024",
        examType: "End-Sem",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        downloads: 365
    },
    {
        id: "pyq-networks-2023",
        title: "Computer Networks University Final Examination Paper 2023",
        subject: "Computer Networks",
        branch: "CSE",
        semester: "Sem 5",
        year: "2023",
        examType: "End-Sem",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        downloads: 198
    },
    {
        id: "pyq-ece-2022",
        title: "Digital Communication & Signals End-Sem Question Paper 2022",
        subject: "Digital Communication",
        branch: "ECE",
        semester: "Sem 5",
        year: "2022",
        examType: "End-Sem",
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        downloads: 174
    }
];

const BTECH_MOCK_TESTS = [
    {
        id: "mock-dsa",
        title: "Data Structures & Algorithms Mastery Mock",
        subject: "Data Structures",
        branch: "CSE",
        durationMinutes: 15,
        questions: [
            {
                q: "What is the worst-case time complexity of QuickSort?",
                options: ["O(N log N)", "O(N^2)", "O(N)", "O(log N)"],
                correct: 1,
                exp: "QuickSort degrades to O(N^2) in the worst case when the selected pivot is consistently the maximum or minimum element (e.g. sorted input with standard first-element pivot)."
            },
            {
                q: "Which data structure is fundamentally used in Breadth-First Search (BFS)?",
                options: ["Stack", "Queue", "Priority Queue", "Binary Search Tree"],
                correct: 1,
                exp: "BFS visits nodes level by level using a FIFO Queue."
            },
            {
                q: "What is the height of an AVL tree with N nodes in the worst case?",
                options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
                correct: 1,
                exp: "AVL balance factor is strictly within [-1, +1], bounding maximum tree height to roughly 1.44 log2(N), which is O(log N)."
            },
            {
                q: "Which sorting algorithm is stable and has guaranteed O(N log N) worst-case time complexity?",
                options: ["Merge Sort", "Heap Sort", "Quick Sort", "Selection Sort"],
                correct: 0,
                exp: "Merge Sort maintains the relative order of identical elements (stable) and strictly operates in O(N log N) time in all cases."
            },
            {
                q: "In an array-based circular queue of capacity N, what condition indicates the queue is full?",
                options: ["front == rear", "(rear + 1) % N == front", "rear == N - 1", "front == (rear + 1)"],
                correct: 1,
                exp: "In circular queue implementation, queue is full when the slot immediately following rear wraps to front."
            },
            {
                q: "What is the minimum number of stacks required to simulate a standard FIFO queue?",
                options: ["1", "2", "3", "None"],
                correct: 1,
                exp: "Two stacks are required: one for pushing elements, and one for reversing order to pop in FIFO manner."
            },
            {
                q: "Which tree traversal of a Binary Search Tree (BST) visits keys in sorted ascending order?",
                options: ["Preorder", "Inorder", "Postorder", "Level-order"],
                correct: 1,
                exp: "Inorder traversal visits Left -> Root -> Right, which strictly yields sorted keys in a BST."
            },
            {
                q: "What is the time complexity to insert a new node at the head of a Singly Linked List?",
                options: ["O(1)", "O(N)", "O(log N)", "O(N^2)"],
                correct: 0,
                exp: "Inserting at the head requires updating two pointers and completes in O(1) constant time."
            },
            {
                q: "Which collision resolution technique does NOT require extra memory pointers outside the hash table?",
                options: ["Chaining with Linked Lists", "Open Addressing (Linear Probing)", "Trie Hashing", "Separate Chaining"],
                correct: 1,
                exp: "Open addressing stores all keys directly within slots inside the hash table itself using probing formulas without external pointers."
            },
            {
                q: "Dijkstra's shortest path algorithm fails in the presence of:",
                options: ["Cycles in graphs", "Negative edge weights", "Disconnected components", "Undirected edges"],
                correct: 1,
                exp: "Dijkstra's greedy choice property fails with negative edge weights. Bellman-Ford algorithm must be used instead."
            }
        ]
    },
    {
        id: "mock-os",
        title: "Operating Systems University Mock Test",
        subject: "Operating Systems",
        branch: "CSE",
        durationMinutes: 15,
        questions: [
            {
                q: "Which of the following is NOT one of Coffman's four conditions for Deadlock?",
                options: ["Mutual Exclusion", "Hold and Wait", "Preemption Allowed", "Circular Wait"],
                correct: 2,
                exp: "Deadlock strictly requires 'No Preemption'. If preemption is allowed, deadlock cannot occur."
            },
            {
                q: "What is the primary cause of Thrashing in operating systems?",
                options: ["CPU overheating", "Continuous page faulting replacing pages immediately needed", "High disk latency", "Process starvation"],
                correct: 1,
                exp: "Thrashing happens when processes spend more time paging and servicing page faults than executing instructions."
            },
            {
                q: "Which CPU scheduling algorithm minimizes average process waiting time theoretically?",
                options: ["First-Come, First-Served (FCFS)", "Round Robin (RR)", "Shortest Job First (SJF)", "Priority Scheduling"],
                correct: 2,
                exp: "SJF provably yields the minimum average waiting time for a set of stationary processes."
            },
            {
                q: "Belady's Anomaly states that increasing page frames can increase page faults in which algorithm?",
                options: ["LRU", "FIFO", "Optimal", "LFU"],
                correct: 1,
                exp: "FIFO is not a stack-based algorithm and can produce more page faults when allocated additional frames."
            },
            {
                q: "What is the main purpose of the Banker's Algorithm?",
                options: ["Deadlock Detection", "Deadlock Avoidance", "Deadlock Recovery", "Page Replacement"],
                correct: 1,
                exp: "Banker's Algorithm tests safe states before allocating resources to prevent entering an unsafe deadlock state."
            },
            {
                q: "Where does the Translation Lookaside Buffer (TLB) reside in hardware?",
                options: ["Inside the CPU Memory Management Unit (MMU)", "Secondary Hard Disk", "BIOS ROM", "Operating System Swap File"],
                correct: 0,
                exp: "The TLB is a high-speed associative hardware cache located directly inside the CPU MMU."
            },
            {
                q: "What system call is used in Unix/Linux to spawn an identical duplicate child process?",
                options: ["create()", "fork()", "exec()", "spawn()"],
                correct: 1,
                exp: "fork() duplicates the calling process to create an exact child process with separate memory spaces."
            },
            {
                q: "Internal fragmentation occurs when:",
                options: ["Unused chunks are between allocated partitions", "Allocated memory is slightly larger than requested memory", "Virtual memory is full", "Stack overflows into heap"],
                correct: 1,
                exp: "Internal fragmentation is unused space inside an allocated fixed partition."
            },
            {
                q: "A counting semaphore initialized with value 1 behaves like a:",
                options: ["Spinlock", "Binary Semaphore / Mutex", "Condition Variable", "Barrier"],
                correct: 1,
                exp: "A semaphore with value 1 only permits one thread into the critical section at a time, acting as a mutex."
            },
            {
                q: "Which CPU scheduling algorithm is most suitable for interactive time-sharing systems?",
                options: ["FCFS", "Round Robin (RR)", "Shortest Job First", "Non-preemptive Priority"],
                correct: 1,
                exp: "Round Robin uses time slices (quanta) providing fair, responsive interaction for time-sharing."
            }
        ]
    }
];

// ==========================================
// 2. STORAGE & STATE CONTROLLER
// ==========================================

const StudySyncState = {
    currentTab: 'notes', // 'notes', 'pyqs', 'mock', 'timer', 'dashboard'
    branchFilter: 'All',
    semFilter: 'All',
    searchTerm: '',
    activeNote: null,
    activeMockTest: null,
    mockCurrentQIndex: 0,
    mockUserAnswers: {},
    mockTimerInterval: null,
    mockSecondsLeft: 15 * 60,
    mockSubmitted: false,
    savedPyqs: [],
    
    // User Profile
    user: null,

    init() {
        // Load user from localStorage
        const savedUser = localStorage.getItem('studysync_user');
        if (savedUser) {
            try {
                this.user = JSON.parse(savedUser);
            } catch (e) {
                this.user = null;
            }
        }

        // Load saved notes & pyqs
        const savedPyqs = localStorage.getItem('studysync_saved_pyqs');
        if (savedPyqs) {
            try { this.savedPyqs = JSON.parse(savedPyqs); } catch (e) {}
        }

        // Theme init
        const savedTheme = localStorage.getItem('studysync_theme') || 'dark';
        if (savedTheme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        this.renderAll();
    },

    saveUser() {
        if (this.user) {
            localStorage.setItem('studysync_user', JSON.stringify(this.user));
        } else {
            localStorage.removeItem('studysync_user');
        }
    },

    renderAll() {
        renderAuthHeader();
        renderNotesGrid();
        renderPyqsGrid();
        renderMockCatalog();
        renderDashboard();
    }
};

// ==========================================
// 3. AUTHENTICATION & STREAKS
// ==========================================

function openAuthModal(mode = 'login') {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('hidden');
    switchAuthTab(mode);
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
}

function switchAuthTab(mode) {
    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('registerForm');
    const tabLogin = document.getElementById('authTabLoginBtn');
    const tabReg = document.getElementById('authTabRegisterBtn');
    const title = document.getElementById('authModalTitle');

    if (mode === 'login') {
        if (loginForm) loginForm.classList.remove('hidden');
        if (regForm) regForm.classList.add('hidden');
        if (tabLogin) { tabLogin.style.background = 'var(--bg-surface)'; tabLogin.style.color = 'var(--text-main)'; }
        if (tabReg) { tabReg.style.background = 'transparent'; tabReg.style.color = 'var(--text-muted)'; }
        if (title) title.innerText = 'Student Login';
    } else {
        if (loginForm) loginForm.classList.add('hidden');
        if (regForm) regForm.classList.remove('hidden');
        if (tabReg) { tabReg.style.background = 'var(--bg-surface)'; tabReg.style.color = 'var(--text-main)'; }
        if (tabLogin) { tabLogin.style.background = 'transparent'; tabLogin.style.color = 'var(--text-muted)'; }
        if (title) title.innerText = 'Create Scholar Profile';
    }
}

function handleLoginSubmit(e) {
    if (e) e.preventDefault();
    const email = document.getElementById('loginEmail')?.value || 'student@college.edu';
    
    StudySyncState.user = {
        name: "Aarav Sharma",
        email: email,
        branch: "CSE",
        year: "3rd Year",
        streak: 8,
        studyMinutes: 320,
        uploadedCount: 2,
        history: [
            { desc: "Logged in to Study Sync portal", date: "Just now" },
            { desc: "Finished 25-min Pomodoro on Operating Systems", date: "Yesterday" }
        ]
    };
    StudySyncState.saveUser();
    closeAuthModal();
    StudySyncState.renderAll();
    showToast(`Welcome back, ${StudySyncState.user.name}! Streak is active 🔥`, 'success');
}

function quickDemoLogin() {
    StudySyncState.user = {
        name: "Aarav Sharma",
        email: "aarav.cse@btech.edu",
        branch: "CSE",
        year: "3rd Year",
        streak: 9,
        studyMinutes: 450,
        uploadedCount: 3,
        history: [
            { desc: "Demo Login session initialized", date: "Just now" },
            { desc: "Scored 90% on DSA Mastery Mock", date: "Yesterday" }
        ]
    };
    StudySyncState.saveUser();
    closeAuthModal();
    StudySyncState.renderAll();
    showToast('🚀 Logged in as Demo Scholar: Aarav Sharma (B.Tech CSE)', 'success');
}

function handleRegisterSubmit(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('regName')?.value || 'Student Scholar';
    const email = document.getElementById('regEmail')?.value || 'student@college.edu';
    const branch = document.getElementById('regBranch')?.value || 'CSE';
    const year = document.getElementById('regYear')?.value || '1st Year';

    StudySyncState.user = {
        name: name,
        email: email,
        branch: branch,
        year: year,
        streak: 1,
        studyMinutes: 0,
        uploadedCount: 0,
        history: [{ desc: "Welcome to Study Sync! Account initialized.", date: "Just now" }]
    };
    StudySyncState.saveUser();
    closeAuthModal();
    StudySyncState.renderAll();
    showToast(`🎓 Welcome, ${name}! Profile created successfully.`, 'success');
}

function handleAuthLogout() {
    StudySyncState.user = null;
    StudySyncState.saveUser();
    StudySyncState.renderAll();
    showToast('👋 Logged out safely.', 'info');
}

function renderAuthHeader() {
    const loggedOutGroup = document.getElementById('authLoggedOutGroup');
    const loggedInGroup = document.getElementById('authLoggedInGroup');
    const headerUserName = document.getElementById('headerUserName');
    const streakElem = document.getElementById('userStreakDays');

    if (StudySyncState.user) {
        if (loggedOutGroup) loggedOutGroup.classList.add('hidden');
        if (loggedInGroup) loggedInGroup.classList.remove('hidden');
        if (headerUserName) headerUserName.innerText = StudySyncState.user.name.split(' ')[0];
        if (streakElem) streakElem.innerText = `${StudySyncState.user.streak}d Streak`;
    } else {
        if (loggedOutGroup) loggedOutGroup.classList.remove('hidden');
        if (loggedInGroup) loggedInGroup.classList.add('hidden');
    }
}

// ==========================================
// 4. TAB NAVIGATION CONTROLLER
// ==========================================

function switchTab(tabName) {
    StudySyncState.currentTab = tabName;
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabName) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Toggle main sections
    const tabs = ['notes', 'pyqs', 'mock', 'timer', 'dashboard'];
    tabs.forEach(t => {
        const sec = document.getElementById(`${t}Section`);
        if (sec) {
            if (t === tabName) sec.classList.remove('hidden');
            else sec.classList.add('hidden');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. B.TECH NOTES SHARING MODULE
// ==========================================

function renderNotesGrid() {
    const grid = document.getElementById('notesGrid');
    if (!grid) return;

    let filtered = BTECH_NOTES.filter(n => {
        const matchesBranch = StudySyncState.branchFilter === 'All' || n.branch === StudySyncState.branchFilter;
        const matchesSem = StudySyncState.semFilter === 'All' || n.semester === StudySyncState.semFilter;
        const query = StudySyncState.searchTerm.toLowerCase();
        const matchesSearch = !query || 
            n.title.toLowerCase().includes(query) || 
            n.subject.toLowerCase().includes(query) || 
            n.description.toLowerCase().includes(query) ||
            n.tags.some(t => t.toLowerCase().includes(query));
        return matchesBranch && matchesSem && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
                <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">📚</span>
                <h3 style="font-size: 1.15rem; font-weight: 700;">No notes found matching your criteria</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">Try resetting your branch or semester filters.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(note => `
        <div class="note-card">
            <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <div style="display: flex; gap: 0.4rem;">
                        <span class="badge-branch">${note.branch}</span>
                        <span class="badge-sem">${note.semester}</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">Shared by ${note.uploader}</span>
                </div>

                <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; line-height: 1.35;">
                    ${note.title}
                </h3>
                <p style="font-size: 0.75rem; font-weight: 700; color: var(--primary); margin-bottom: 0.6rem;">
                    Subject: ${note.subject}
                </p>

                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.85rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                    ${note.description}
                </p>

                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1rem;">
                    ${note.tags.map(t => `<span style="font-size: 0.7rem; padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); background: var(--bg-surface-subtle); color: var(--text-muted);">#${t}</span>`).join('')}
                </div>
            </div>

            <div style="padding-top: 0.85rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <button onclick="toggleUpvote('${note.id}')" class="btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                        <span>👍</span> <span id="upvote-count-${note.id}">${note.upvotes}</span>
                    </button>
                    <button onclick="openNoteReader('${note.id}')" class="btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                        <span>💬</span> <span>${note.comments.length}</span>
                    </button>
                    <button onclick="copyShareLink('${note.id}')" class="btn-icon" style="width: 2rem; height: 2rem;" title="Copy share link">
                        🔗
                    </button>
                </div>

                <button onclick="openNoteReader('${note.id}')" class="btn-primary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
                    <span>View Notes</span> →
                </button>
            </div>
        </div>
    `).join('');
}

function filterByBranch(b) {
    StudySyncState.branchFilter = b;
    document.querySelectorAll('#branchFilters .filter-chip').forEach(c => {
        if (c.getAttribute('data-val') === b) c.classList.add('active');
        else c.classList.remove('active');
    });
    renderNotesGrid();
}

function filterBySem(s) {
    StudySyncState.semFilter = s;
    document.querySelectorAll('#semFilters .filter-chip').forEach(c => {
        if (c.getAttribute('data-val') === s) c.classList.add('active');
        else c.classList.remove('active');
    });
    renderNotesGrid();
}

function handleSearchInput(val) {
    StudySyncState.searchTerm = val.trim();
    renderNotesGrid();
}

function toggleUpvote(noteId) {
    const note = BTECH_NOTES.find(n => n.id === noteId);
    if (!note) return;
    note.upvotes += 1;
    const countElem = document.getElementById(`upvote-count-${noteId}`);
    if (countElem) countElem.innerText = note.upvotes;
    showToast(`👍 Upvoted "${note.subject}" notes!`, 'success');
}

function copyShareLink(noteId) {
    const link = `${window.location.origin}${window.location.pathname}#note=${noteId}`;
    navigator.clipboard.writeText(link).then(() => {
        showToast('🔗 Direct note link copied to clipboard!', 'info');
    });
}

// Note Reader Modal
function openNoteReader(noteId) {
    const note = BTECH_NOTES.find(n => n.id === noteId);
    if (!note) return;
    StudySyncState.activeNote = note;

    const modal = document.getElementById('noteReaderModal');
    if (!modal) return;

    document.getElementById('readerTitle').innerText = note.title;
    document.getElementById('readerSubject').innerText = `${note.branch} • ${note.semester} • ${note.subject}`;
    document.getElementById('readerUploader').innerText = `Uploaded by ${note.uploader}`;
    document.getElementById('readerContent').innerHTML = note.content
        .replace(/### (.*?)\n/g, '<h3 style="font-size: 1.15rem; font-weight: 800; margin: 1rem 0 0.5rem; color: var(--text-main);">$1</h3>')
        .replace(/#### (.*?)\n/g, '<h4 style="font-size: 1rem; font-weight: 700; margin: 0.85rem 0 0.35rem; color: var(--primary);">$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n- (.*?)/g, '<li style="margin-left: 1.25rem;">$1</li>')
        .replace(/\n\n/g, '<br/>');

    renderReaderComments();
    modal.classList.remove('hidden');
}

function closeNoteReader() {
    const modal = document.getElementById('noteReaderModal');
    if (modal) modal.classList.add('hidden');
}

function renderReaderComments() {
    const list = document.getElementById('readerCommentsList');
    if (!list || !StudySyncState.activeNote) return;

    const comments = StudySyncState.activeNote.comments || [];
    if (comments.length === 0) {
        list.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 1rem;">No comments yet. Be the first to start the discussion!</p>`;
        return;
    }

    list.innerHTML = comments.map(c => `
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); margin-bottom: 0.5rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.25rem;">
                <span style="color: var(--primary);">${c.user}</span>
                <span style="color: var(--text-muted);">${c.date}</span>
            </div>
            <p style="font-size: 0.82rem; color: var(--text-main); line-height: 1.4;">${c.text}</p>
        </div>
    `).join('');
}

function addReaderComment(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('newCommentInput');
    if (!input || !input.value.trim() || !StudySyncState.activeNote) return;

    const author = StudySyncState.user ? StudySyncState.user.name : "Student Scholar";
    StudySyncState.activeNote.comments.push({
        user: author,
        text: input.value.trim(),
        date: "Just now"
    });
    input.value = '';
    renderReaderComments();
    renderNotesGrid();
    showToast('💬 Comment posted to discussion thread!', 'success');
}

// Upload Notes Modal
function openUploadModal() {
    if (!StudySyncState.user) {
        showToast('Please sign in or register first to upload notes.', 'warning');
        openAuthModal('login');
        return;
    }
    const modal = document.getElementById('uploadNoteModal');
    if (modal) modal.classList.remove('hidden');
}

function closeUploadModal() {
    const modal = document.getElementById('uploadNoteModal');
    if (modal) modal.classList.add('hidden');
}

function handleUploadNoteSubmit(e) {
    if (e) e.preventDefault();
    const title = document.getElementById('uploadTitle').value.trim();
    const subject = document.getElementById('uploadSubject').value.trim();
    const branch = document.getElementById('uploadBranch').value;
    const semester = document.getElementById('uploadSemester').value;
    const desc = document.getElementById('uploadDesc').value.trim();
    const tags = document.getElementById('uploadTags').value.split(',').map(t => t.trim()).filter(Boolean);

    const newNote = {
        id: `note-${Date.now()}`,
        title: title,
        subject: subject,
        branch: branch,
        semester: semester,
        uploader: StudySyncState.user ? StudySyncState.user.name : "Scholar",
        upvotes: 1,
        tags: tags.length ? tags : [subject, branch],
        description: desc,
        fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        content: `### ${title}\n\n#### Course Subject: ${subject}\n${desc}\n\n- Note verified by student uploader.\n- Formula diagrams and lecture explanations included.`,
        comments: []
    };

    BTECH_NOTES.unshift(newNote);
    if (StudySyncState.user) {
        StudySyncState.user.uploadedCount = (StudySyncState.user.uploadedCount || 0) + 1;
        StudySyncState.user.history.unshift({ desc: `Uploaded new notes: "${title}"`, date: "Just now" });
        StudySyncState.saveUser();
    }

    closeUploadModal();
    StudySyncState.renderAll();
    showToast(`🎉 "${title}" uploaded and shared with B.Tech students!`, 'success');
}

// ==========================================
// 6. UNIVERSITY PYQ ARCHIVE MODULE
// ==========================================

function renderPyqsGrid() {
    const grid = document.getElementById('pyqsGrid');
    if (!grid) return;

    grid.innerHTML = BTECH_PYQS.map(paper => {
        const isSaved = StudySyncState.savedPyqs.includes(paper.id);
        return `
            <div class="note-card" style="border-left: 4px solid var(--secondary);">
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.6rem;">
                        <div style="display: flex; gap: 0.4rem;">
                            <span class="badge-branch">${paper.branch}</span>
                            <span class="badge-sem">${paper.semester}</span>
                        </div>
                        <span style="font-size: 0.75rem; font-weight: 700; color: var(--secondary);">📅 ${paper.year} (${paper.examType})</span>
                    </div>

                    <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem;">
                        ${paper.title}
                    </h3>
                    <p style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); margin-bottom: 1rem;">
                        Subject: ${paper.subject} • ${paper.downloads} student downloads
                    </p>
                </div>

                <div style="padding-top: 0.75rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
                    <button onclick="toggleSavePyq('${paper.id}')" class="btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                        <span>${isSaved ? '⭐ Saved' : '☆ Bookmark'}</span>
                    </button>
                    <a href="${paper.fileUrl}" target="_blank" class="btn-primary" style="padding: 0.35rem 0.85rem; font-size: 0.75rem; text-decoration: none;">
                        <span>📥 Download PDF</span>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function toggleSavePyq(id) {
    if (StudySyncState.savedPyqs.includes(id)) {
        StudySyncState.savedPyqs = StudySyncState.savedPyqs.filter(x => x !== id);
        showToast('Bookmark removed from library.', 'info');
    } else {
        StudySyncState.savedPyqs.push(id);
        showToast('⭐ Question paper bookmarked to your library!', 'success');
    }
    localStorage.setItem('studysync_saved_pyqs', JSON.stringify(StudySyncState.savedPyqs));
    renderPyqsGrid();
    renderDashboard();
}

// ==========================================
// 7. EXAM MOCK TEST MODULE (10 Questions + Timer)
// ==========================================

function renderMockCatalog() {
    const list = document.getElementById('mockTestsList');
    if (!list) return;

    list.innerHTML = BTECH_MOCK_TESTS.map(t => `
        <div class="note-card" style="border-top: 4px solid var(--success);">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span class="badge-branch">${t.branch}</span>
                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--success);">⏱️ ${t.durationMinutes} Mins</span>
                </div>
                <h3 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.35rem;">${t.title}</h3>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                    Subject: ${t.subject} • 10 Questions with instant scoring & detailed solutions
                </p>
            </div>
            <button onclick="startMockTest('${t.id}')" class="btn-primary" style="background: var(--success); width: 100%; justify-content: center; padding: 0.65rem;">
                <span>Start Mock Test</span> →
            </button>
        </div>
    `).join('');
}

function startMockTest(testId) {
    const test = BTECH_MOCK_TESTS.find(t => t.id === testId);
    if (!test) return;

    StudySyncState.activeMockTest = test;
    StudySyncState.mockCurrentQIndex = 0;
    StudySyncState.mockUserAnswers = {};
    StudySyncState.mockSecondsLeft = test.durationMinutes * 60;
    StudySyncState.mockSubmitted = false;

    document.getElementById('mockCatalogView')?.classList.add('hidden');
    document.getElementById('mockActiveView')?.classList.remove('hidden');
    document.getElementById('mockResultsView')?.classList.add('hidden');

    document.getElementById('mockTestTitle').innerText = test.title;

    // Start timer countdown
    clearInterval(StudySyncState.mockTimerInterval);
    StudySyncState.mockTimerInterval = setInterval(() => {
        if (StudySyncState.mockSecondsLeft > 0) {
            StudySyncState.mockSecondsLeft--;
            updateMockTimerDisplay();
        } else {
            clearInterval(StudySyncState.mockTimerInterval);
            submitMockTest();
        }
    }, 1000);

    updateMockTimerDisplay();
    renderMockQuestion();
}

function updateMockTimerDisplay() {
    const m = Math.floor(StudySyncState.mockSecondsLeft / 60);
    const s = StudySyncState.mockSecondsLeft % 60;
    const elem = document.getElementById('mockTimerClock');
    if (elem) elem.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function renderMockQuestion() {
    const test = StudySyncState.activeMockTest;
    if (!test) return;

    const q = test.questions[StudySyncState.mockCurrentQIndex];
    document.getElementById('mockQuestionNumber').innerText = `Question ${StudySyncState.mockCurrentQIndex + 1} of ${test.questions.length}`;
    document.getElementById('mockQuestionText').innerText = q.q;

    // Options rendering
    const container = document.getElementById('mockOptionsContainer');
    if (container) {
        const selected = StudySyncState.mockUserAnswers[StudySyncState.mockCurrentQIndex];
        container.innerHTML = q.options.map((opt, idx) => `
            <div onclick="selectMockOption(${idx})" style="padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 2px solid ${selected === idx ? 'var(--primary)' : 'var(--border-subtle)'}; background: ${selected === idx ? 'var(--primary-light)' : 'var(--bg-surface)'}; cursor: pointer; display: flex; align-items: center; gap: 0.75rem; transition: all 0.15s ease;">
                <span style="width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; background: ${selected === idx ? 'var(--primary)' : 'var(--bg-surface-subtle)'}; color: ${selected === idx ? 'white' : 'var(--text-main)'};">
                    ${String.fromCharCode(65 + idx)}
                </span>
                <span style="font-size: 0.9rem; font-weight: 600;">${opt}</span>
            </div>
        `).join('');
    }

    // Palette
    const palette = document.getElementById('mockQuestionPalette');
    if (palette) {
        palette.innerHTML = test.questions.map((_, i) => {
            const answered = StudySyncState.mockUserAnswers[i] !== undefined;
            const current = i === StudySyncState.mockCurrentQIndex;
            return `
                <button onclick="jumpToMockQuestion(${i})" style="width: 32px; height: 32px; border-radius: var(--radius-sm); border: none; font-size: 0.75rem; font-weight: 700; cursor: pointer; background: ${current ? 'var(--primary)' : answered ? 'var(--success)' : 'var(--bg-surface-subtle)'}; color: ${current || answered ? 'white' : 'var(--text-main)'};">
                    ${i + 1}
                </button>
            `;
        }).join('');
    }
}

function selectMockOption(idx) {
    StudySyncState.mockUserAnswers[StudySyncState.mockCurrentQIndex] = idx;
    renderMockQuestion();
}

function nextMockQuestion() {
    if (StudySyncState.mockCurrentQIndex < StudySyncState.activeMockTest.questions.length - 1) {
        StudySyncState.mockCurrentQIndex++;
        renderMockQuestion();
    }
}

function prevMockQuestion() {
    if (StudySyncState.mockCurrentQIndex > 0) {
        StudySyncState.mockCurrentQIndex--;
        renderMockQuestion();
    }
}

function jumpToMockQuestion(i) {
    StudySyncState.mockCurrentQIndex = i;
    renderMockQuestion();
}

function submitMockTest() {
    clearInterval(StudySyncState.mockTimerInterval);
    StudySyncState.mockSubmitted = true;

    const test = StudySyncState.activeMockTest;
    let score = 0;
    test.questions.forEach((q, idx) => {
        if (StudySyncState.mockUserAnswers[idx] === q.correct) score++;
    });

    const percentage = Math.round((score / test.questions.length) * 100);

    // Update student history
    if (StudySyncState.user) {
        StudySyncState.user.history.unshift({
            desc: `Completed Mock: ${test.title} (${score}/${test.questions.length} - ${percentage}%)`,
            date: "Just now"
        });
        StudySyncState.saveUser();
    }

    // Render results view
    document.getElementById('mockActiveView')?.classList.add('hidden');
    document.getElementById('mockResultsView')?.classList.remove('hidden');

    document.getElementById('mockResultScore').innerText = `${score} / ${test.questions.length}`;
    document.getElementById('mockResultPercent').innerText = `${percentage}% Accuracy`;
    document.getElementById('mockResultStatus').innerText = percentage >= 50 ? '🎉 Exam Qualified!' : '⚡ Needs Revision';

    // Detailed explanation keys review
    const reviewContainer = document.getElementById('mockAnswerKeysContainer');
    if (reviewContainer) {
        reviewContainer.innerHTML = test.questions.map((q, idx) => {
            const userAns = StudySyncState.mockUserAnswers[idx];
            const isCorrect = userAns === q.correct;
            return `
                <div style="background: var(--bg-surface); border: 1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}; border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted);">Question ${idx + 1}</span>
                        <span style="font-size: 0.75rem; font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                            ${isCorrect ? '✔ Correct (+1)' : '✖ Incorrect (0)'}
                        </span>
                    </div>
                    <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem;">${q.q}</h4>
                    
                    <div style="font-size: 0.8rem; line-height: 1.6; margin-bottom: 0.75rem;">
                        <div>Your answer: <strong style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">${userAns !== undefined ? q.options[userAns] : 'Not Answered'}</strong></div>
                        <div>Correct answer: <strong style="color: var(--success);">${q.options[q.correct]}</strong></div>
                    </div>

                    <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-md); font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45;">
                        <strong style="color: var(--primary);">Concept Explanation:</strong> ${q.exp}
                    </div>
                </div>
            `;
        }).join('');
    }
}

function exitMockTest() {
    clearInterval(StudySyncState.mockTimerInterval);
    document.getElementById('mockCatalogView')?.classList.remove('hidden');
    document.getElementById('mockActiveView')?.classList.add('hidden');
    document.getElementById('mockResultsView')?.classList.add('hidden');
    StudySyncState.activeMockTest = null;
    renderDashboard();
}

// ==========================================
// 8. FOCUS POMODORO TIMER WITH AUDIO CHIME
// ==========================================

const PomodoroEngine = {
    mode: 'work', // 'work', 'short', 'long'
    workMin: 25,
    shortMin: 5,
    longMin: 15,
    timeLeft: 25 * 60,
    isRunning: false,
    interval: null,

    // Zero-dependency synthetic Web Audio chime alert
    playBellSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35); // A5

            gain.gain.setValueAtTime(0.4, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 1.2);
        } catch (e) {}
    },

    setMode(newMode) {
        this.pause();
        this.mode = newMode;
        if (newMode === 'work') this.timeLeft = this.workMin * 60;
        else if (newMode === 'short') this.timeLeft = this.shortMin * 60;
        else this.timeLeft = this.longMin * 60;

        document.querySelectorAll('.timer-mode-btn').forEach(btn => {
            if (btn.getAttribute('data-mode') === newMode) btn.classList.add('btn-primary');
            else btn.classList.remove('btn-primary');
        });

        this.updateDisplay();
    },

    toggle() {
        if (this.isRunning) this.pause();
        else this.start();
    },

    start() {
        this.isRunning = true;
        const btn = document.getElementById('timerStartBtn');
        if (btn) btn.innerHTML = '<span>⏸️</span> Pause';

        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.updateDisplay();
            } else {
                this.pause();
                this.playBellSound();

                if (this.mode === 'work') {
                    showToast('🎉 Focus cycle completed! +25 mins added to your study log.', 'success');
                    if (StudySyncState.user) {
                        StudySyncState.user.studyMinutes = (StudySyncState.user.studyMinutes || 0) + 25;
                        StudySyncState.user.streak = (StudySyncState.user.streak || 1) + 1;
                        StudySyncState.user.history.unshift({ desc: "Completed 25-min Pomodoro Study Session", date: "Just now" });
                        StudySyncState.saveUser();
                        StudySyncState.renderAll();
                    }
                    this.setMode('short');
                } else {
                    showToast('⏰ Break finished! Ready for next deep focus sprint?', 'info');
                    this.setMode('work');
                }
            }
        }, 1000);
    },

    pause() {
        this.isRunning = false;
        clearInterval(this.interval);
        const btn = document.getElementById('timerStartBtn');
        if (btn) btn.innerHTML = '<span>▶️</span> Start Focus';
    },

    reset() {
        this.pause();
        this.setMode(this.mode);
    },

    updateDisplay() {
        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        const display = document.getElementById('timerClockText');
        if (display) display.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
};

// ==========================================
// 9. SCHOLAR PROFILE DASHBOARD MODULE
// ==========================================

function renderDashboard() {
    const user = StudySyncState.user;
    const nameElem = document.getElementById('dashUserName');
    const branchElem = document.getElementById('dashUserBranch');
    const emailElem = document.getElementById('dashUserEmail');
    const streakElem = document.getElementById('dashStreakCount');
    const hoursElem = document.getElementById('dashFocusHours');
    const uploadsElem = document.getElementById('dashUploadsCount');
    const savedElem = document.getElementById('dashSavedCount');
    const historyList = document.getElementById('dashHistoryList');

    if (user) {
        if (nameElem) nameElem.innerText = user.name;
        if (branchElem) branchElem.innerText = `${user.branch} • ${user.year}`;
        if (emailElem) emailElem.innerText = user.email;
        if (streakElem) streakElem.innerText = `${user.streak} Days`;
        if (hoursElem) hoursElem.innerText = `${Math.round((user.studyMinutes || 0) / 60 * 10) / 10}h`;
        if (uploadsElem) uploadsElem.innerText = user.uploadedCount || 0;
        if (savedElem) savedElem.innerText = StudySyncState.savedPyqs.length;

        if (historyList) {
            historyList.innerHTML = (user.history || []).map(h => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0.85rem; border-radius: var(--radius-md); background: var(--bg-surface-subtle); margin-bottom: 0.4rem; font-size: 0.8rem;">
                    <span style="font-weight: 600; color: var(--text-main);">${h.desc}</span>
                    <span style="color: var(--text-muted); font-size: 0.75rem;">${h.date}</span>
                </div>
            `).join('');
        }
    } else {
        if (nameElem) nameElem.innerText = "Guest Student";
        if (branchElem) branchElem.innerText = "Sign in to unlock full sync";
        if (emailElem) emailElem.innerText = "guest@studysync.edu";
        if (streakElem) streakElem.innerText = "1 Day";
        if (hoursElem) hoursElem.innerText = "0h";
        if (uploadsElem) uploadsElem.innerText = "0";
        if (savedElem) savedElem.innerText = StudySyncState.savedPyqs.length;
        if (historyList) {
            historyList.innerHTML = `<p style="text-align: center; font-size: 0.8rem; color: var(--text-muted); padding: 1rem;">Sign in to view your real-time activity and badges.</p>`;
        }
    }
}

// ==========================================
// 10. TOAST NOTIFICATIONS & THEME
// ==========================================

function showToast(message, type = 'info') {
    const shelf = document.getElementById('toastContainer');
    if (!shelf) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.borderLeft = type === 'success' ? '4px solid var(--success)' : type === 'warning' ? '4px solid var(--warning)' : '4px solid var(--primary)';
    toast.innerHTML = `<span>${message}</span>`;

    shelf.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('studysync_theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('studysync_theme', 'dark');
    }
}

// Boot up
document.addEventListener('DOMContentLoaded', () => {
    StudySyncState.init();
    PomodoroEngine.updateDisplay();
});
