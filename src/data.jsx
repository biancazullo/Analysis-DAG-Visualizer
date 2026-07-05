import React from 'react';
import katex from 'katex';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
// We wrap the data in a function so it can listen to the Dark Mode switch!
const Latex = ({ math }) => {
  // throwOnError: false prevents app crashes and highlights syntax errors in red
  const html = katex.renderToString(math, { throwOnError: false });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};
export const getGraphData = (isDarkMode) => ({
  
  // ==========================================
  // SCENE 1: THE HOME SCREEN
  // ==========================================
  'home': {
    nodes: [
      { id: 'subj-1', type: 'mathNode', position: { x: 100, y: 150 }, data: { title: 'Sets', content: 'Ordered Sets, Supremum, Infimum', isDarkMode, navigateTo: 'sets-menu' } },
      { id: 'subj-2', type: 'mathNode', position: { x: 100, y: 300 }, data: { title: 'Fields', content: 'Ordered Fields, Existence, Density, Complex Field', isDarkMode, navigateTo: 'fields-menu' } },
      { id: 'subj-3', type: 'mathNode', position: { x: 100, y: 450 }, data: { title: 'Topology of Metric Spaces', content: 'Intervals, K-Cells, Open/Closed Sets, Compactness, Balls, etc.', isDarkMode, navigateTo: 'topology-menu' } },
      { id: 'subj-4', type: 'mathNode', position: { x: 100, y: 600 }, data: { title: 'Limits and Continuity', content: 'Limits of Functions, Epsilon-Delta, Continuity, Compactness, Connectedness, etc.', isDarkMode, navigateTo: 'limits-menu' } }
    ],
    edges: [] 
  },

  // ==========================================
  // 1. SETS ROUTING
  // ==========================================
  'sets-menu': {
    nodes: [
      { id: 'sets-root', type: 'mathNode', position: { x: 50, y: 200 }, data: { title: 'Subject', content: 'Sets', isDarkMode } },
      { id: 'sets-cat-def', type: 'mathNode', position: { x: 400, y: 200 }, data: { title: 'Category', content: 'Definitions', isDarkMode, navigateTo: 'sets-definitions' } },
      { id: 'sets-cat-thm', type: 'mathNode', position: { x: 400, y: 350 }, data: { title: 'Category', content: 'Theorems', isDarkMode, navigateTo: 'sets-theorems' } },
    ],
    edges: [
      { id: 'e-sets-1', source: 'sets-root', target: 'sets-cat-ax', animated: true },
      { id: 'e-sets-2', source: 'sets-root', target: 'sets-cat-def', animated: true },
      { id: 'e-sets-3', source: 'sets-root', target: 'sets-cat-thm', animated: true },
    ]
  },
  
  'sets-definitions': { 
    nodes: [
      { 
        id: 's-def-root', type: 'mathNode', position: { x: 30, y: 500 }, 
        data: { title: 'Sets: Definitions', content: 'Click on any definition to view it as an index card!', isDarkMode } 
      },
      { 
        id: 'def-ordered-set', type: 'mathNode', position: { x: 400, y: 50 }, 
        data: { 
          title: 'Ordered Set', 
          content: (
            <div>
              <Latex math={String.raw`\forall x, y \in S \implies (x < y) \veebar (x = y) \veebar (x > y)`}/>
              <br />
              <Latex math={String.raw`\forall x, y, z \in S, (x < y \land y < z) \implies x < z`} />
            </div>
          ), 
          isDarkMode 
        } 
      },
      { 
        id: 'def-upper-bound', type: 'mathNode', position: { x: 400, y: 200 }, 
        data: { 
          title: 'Upperly Bounded Set', 
          content: (
            <div>
              Let <Latex math={String.raw`S`} /> be an ordered set and <Latex math={String.raw`E \subset S`}/>.<br />
              <Latex math={String.raw`\exists \beta \in S \text{ such that } x \le \beta \quad \forall x \in E`} /><br />
              Then <Latex math={String.raw`\beta`} /> is an upper bound of <Latex math={String.raw`E`} />.
            </div>
          ), 
          isDarkMode 
        } 
      },
      { 
        id: 'def-lower-bound', type: 'mathNode', position: { x: 400, y: 350 }, 
        data: { 
          title: 'Lowerly Bounded Set', 
          content: (
            <div>
              Let <Latex math={String.raw`S`} /> be an ordered set and <Latex math={String.raw`E \subset S`}/>.<br />
              <Latex math={String.raw`\exists \beta \in S \text{ such that } x \ge \beta \quad \forall x \in E`} /><br />
              Then <Latex math={String.raw`\beta`} /> is a lower bound of <Latex math={String.raw`E`} />.
            </div>
          ), 
          isDarkMode 
        } 
      },
      { 
        id: 'def-supremum', type: 'mathNode', position: { x: 400, y: 500 }, 
        data: { 
          title: 'Supremum (Least Upper Bound)', 
          content: (
            <div>
              Let <Latex math={String.raw`\alpha \in S`} /> be an upper bound of <Latex math={String.raw`E \subset S`}/>.<br />
              <Latex math={String.raw`\forall \gamma < \alpha \implies \gamma \text{ is not an upper bound of } E`} /><br />
              Then <Latex math={String.raw`\alpha = \sup E`} />.
            </div>
          ), 
          isDarkMode 
        } 
      },
      { 
        id: 'def-infimum', type: 'mathNode', position: { x: 400, y: 650 }, 
        data: { 
          title: 'Infimum (Greatest Lower Bound)', 
          content: (
            <div>
              Let <Latex math={String.raw`\alpha \in S`} /> be a lower bound of <Latex math={String.raw`E \subset S`}/>.<br />
              <Latex math={String.raw`\forall \gamma > \alpha \implies \gamma \text{ is not a lower bound of } E`} /><br />
              Then <Latex math={String.raw`\alpha = \inf E`} />.
            </div>
          ), 
          isDarkMode 
        } 
      },
      { 
        id: 'def-sup-property', type: 'mathNode', position: { x: 400, y: 800 }, 
        data: { 
          title: 'Supremum Property', 
          content: (
            <div>
              Let <Latex math={String.raw`S`} /> be an ordered set. <br />
              If <Latex math={String.raw`E \subset S, E \neq \emptyset`} /> and <Latex math={String.raw`E`} /> is bounded above,<br />
              <Latex math={String.raw`\implies \exists \sup E \in S`} />.
            </div>
          ), 
          isDarkMode 
        } 
      },
      { 
        id: 'def-sup-epsilon', type: 'mathNode', position: { x: 400, y: 950 }, 
        data: { 
          title: 'Epsilon Characterisation of Supremum', 
          content: (
            <div>
              <Latex math={String.raw`s = \sup A \iff`} /><br />
              <Latex math={String.raw`\forall \epsilon > 0, \exists a \in A \text{ such that } s - \epsilon < a \le s`} />
            </div>
          ), 
          isDarkMode 
        } 
      }
    ], 
    edges: [
      { id: 'e-sd-1', source: 's-def-root', target: 'def-ordered-set', animated: true },
      { id: 'e-sd-2', source: 's-def-root', target: 'def-upper-bound', animated: true },
      { id: 'e-sd-3', source: 's-def-root', target: 'def-lower-bound', animated: true },
      { id: 'e-sd-4', source: 's-def-root', target: 'def-supremum', animated: true },
      { id: 'e-sd-5', source: 's-def-root', target: 'def-infimum', animated: true },
      { id: 'e-sd-6', source: 's-def-root', target: 'def-sup-property', animated: true },
      { id: 'e-sd-7', source: 's-def-root', target: 'def-sup-epsilon', animated: true }
    ] 
  },

  // ==========================================
  // SETS THEOREMS 
  // ==========================================
  'sets-theorems': { 
    nodes: [
      { id: 's-thm-root', type: 'mathNode', position: { x: 50, y: 250 }, data: { title: 'Sets: Theorems', content: 'Click on each theorem to get hints on how to prove it!', isDarkMode } },
      { 
        id: 'thm-inf-existence', type: 'mathNode', position: { x: 480, y: 100 }, 
        data: { title: 'Infimum Existence Theorem', content: (<div>
  <span>Let </span><Latex math={String.raw`S`} /><span> be an ordered set with the supremum property. Let </span><Latex math={String.raw`B \neq \emptyset \subseteq S`} /><span> be bounded below, and let </span><Latex math={String.raw`L`} /><span> be the set of all lower bounds of </span><Latex math={String.raw`B`} /><span>. </span><br/>
  <span>Then </span><Latex math={String.raw`\alpha = \sup L`} /><span> exists in </span><Latex math={String.raw`S`} /><span> and </span><Latex math={String.raw`\inf B = \alpha`} /><span>.</span>
</div>), description: (
  <div>
    <span>Proof Hints: Show that </span><Latex math={String.raw`A`} /><span> is an upper bound of </span><Latex math={String.raw`B`} /><span> because </span><Latex math={String.raw`A \ge B`} /><span> for all lower bounds </span><Latex math={String.raw`b \in B`} /><span>. Then, since </span><Latex math={String.raw`A \in B`} /><span> (as the greatest lower bound), any smaller upper bound would contradict </span><Latex math={String.raw`A`} /><span> being in </span><Latex math={String.raw`B`} /><span>, making </span><Latex math={String.raw`A`} /><span> the least upper bound.</span>
  </div>
), isDarkMode } 
      },
      { 
        id: 'thm-sup-unique', type: 'mathNode', position: { x: 480, y: 300 }, 
        data: { title: 'Uniqueness of Supremum', content: (<div>
  <span>Let </span><Latex math={String.raw`S`} /><span> be an ordered set such that </span><Latex math={String.raw`E \subseteq S`} /><span> is bounded above. If there exists an </span><Latex math={String.raw`\alpha \in S`} /><span> such that </span><Latex math={String.raw`\alpha`} /><span> is an upper bound of </span><Latex math={String.raw`E`} />, <br/>
  <span>and if for any </span><Latex math={String.raw`\gamma < \alpha`} /><span>, </span><Latex math={String.raw`\gamma`} /><span> is not an upper bound of </span><Latex math={String.raw`E`} /><span>, then </span><Latex math={String.raw`\alpha = \sup E`} /><span>.</span>
</div>), description: (
  <div>
    <span>Proof Hints: Assume for contradiction that a set </span><Latex math={String.raw`E`} /><span> has two different suprema, </span><Latex math={String.raw`\alpha_1`} /><span> and </span><Latex math={String.raw`\alpha_2`} /><span>, where </span><Latex math={String.raw`\alpha_1 < \alpha_2`} /><span>. Because </span><Latex math={String.raw`\alpha_1`} /><span> is a supremum, property requires it to be a valid upper bound of </span><Latex math={String.raw`E`} /><span>. However, since </span><Latex math={String.raw`\alpha_1 < \alpha_2`} /><span>, </span><Latex math={String.raw`\alpha_1`} /><span> cannot be an upper bound of </span><Latex math={String.raw`E`} /><span>, creating an immediate contradiction that forces </span><Latex math={String.raw`\alpha_1 = \alpha_2`} /><span>.</span>
  </div>
), isDarkMode} 
      }
    ], 
    edges: [
      { id: 'e-st-1', source: 's-thm-root', target: 'thm-inf-existence', animated: true },
      { id: 'e-st-2', source: 's-thm-root', target: 'thm-sup-unique', animated: true }
    ] 
  },

  
  // ==========================================
  // 2. FIELDS ROUTING & CONTENT
  // ==========================================
  'fields-menu': {
    nodes: [
      { id: 'fields-root', type: 'mathNode', position: { x: 50, y: 275 }, data: { title: 'Subject', content: 'Fields', isDarkMode } },
      { id: 'fields-cat-ax', type: 'mathNode', position: { x: 400, y: 50 }, data: { title: 'Category', content: 'Axioms', isDarkMode, navigateTo: 'fields-axioms' } },
      { id: 'fields-cat-def', type: 'mathNode', position: { x: 400, y: 200 }, data: { title: 'Category', content: 'Definitions', isDarkMode, navigateTo: 'fields-definitions' } },
      { id: 'fields-cat-prop', type: 'mathNode', position: { x: 400, y: 350 }, data: { title: 'Category', content: 'Propositions', isDarkMode, navigateTo: 'fields-propositions' } },
      { id: 'fields-cat-thm', type: 'mathNode', position: { x: 400, y: 500 }, data: { title: 'Category', content: 'Theorems', isDarkMode, navigateTo: 'fields-theorems' } },
    ],
    edges: [
      { id: 'e-fields-1', source: 'fields-root', target: 'fields-cat-ax', animated: true },
      { id: 'e-fields-2', source: 'fields-root', target: 'fields-cat-def', animated: true },
      { id: 'e-fields-3', source: 'fields-root', target: 'fields-cat-prop', animated: true },
      { id: 'e-fields-4', source: 'fields-root', target: 'fields-cat-thm', animated: true },
    ]
  },

  'fields-axioms': { 
    nodes: [
      { id: 'f-ax-root', type: 'mathNode', position: { x: 50, y: 875 }, data: { title: 'Fields: Axioms', content: (<div>Axioms<br/><Latex math={String.raw`\forall x,y,z \in F`} /></div>), isDarkMode } },
      { id: 'fa-1', type: 'mathNode', position: { x: 400, y: 50 }, data: { title: 'Closure (+)', content: <Latex math={String.raw`x + y \in F`} />, isDarkMode } },
      { id: 'fa-2', type: 'mathNode', position: { x: 400, y: 200 }, data: { title: 'Commutativity (+)', content: <Latex math={String.raw`x + y = y + x`} />, isDarkMode } },
      { id: 'fa-3', type: 'mathNode', position: { x: 400, y: 350 }, data: { title: 'Associativity (+)', content: <Latex math={String.raw`(x + y) + z = x + (y + z)`} />, isDarkMode } },
      { id: 'fa-4', type: 'mathNode', position: { x: 400, y: 500 }, data: { title: 'Neutral (+)', content: <Latex math={String.raw`\exists 0 \in F \text{ s.t. } 0 + x = x`} />, isDarkMode } },
      { id: 'fa-5', type: 'mathNode', position: { x: 400, y: 650 }, data: { title: 'Inverse (+)', content: <Latex math={String.raw`\exists (-x) \in F \text{ s.t. } x + (-x) = 0`} />, isDarkMode } },
      { id: 'fa-6', type: 'mathNode', position: { x: 400, y: 800 }, data: { title: 'Closure (*)', content: <Latex math={String.raw`xy \in F`} />, isDarkMode } },
      { id: 'fa-7', type: 'mathNode', position: { x: 400, y: 950 }, data: { title: 'Commutativity (*)', content: <Latex math={String.raw`xy = yx`} />, isDarkMode } },
      { id: 'fa-8', type: 'mathNode', position: { x: 400, y: 1100 }, data: { title: 'Associativity (*)', content: <Latex math={String.raw`(xy)z = x(yz)`} />, isDarkMode } },
      { id: 'fa-9', type: 'mathNode', position: { x: 400, y: 1250 }, data: { title: 'Neutral (*)', content: <Latex math={String.raw`\exists 1 \in F, 1 \neq 0 \text{ s.t. } 1x = x`} />, isDarkMode } },
      { id: 'fa-10', type: 'mathNode', position: { x: 400, y: 1400 }, data: { title: 'Inverse (*)', content: <Latex math={String.raw`\forall x \neq 0, \exists \frac{1}{x} \in F \text{ s.t. } x\left(\frac{1}{x}\right) = 1`} />, isDarkMode } },
      { id: 'fa-11', type: 'mathNode', position: { x: 400, y: 1550 }, data: { title: 'Distributive Law', content: <Latex math={String.raw`x(y + z) = xy + xz`} />, isDarkMode } },
      { 
        id: 'fa-12', type: 'mathNode', position: { x: 400, y: 1700 }, 
        data: { title: 'Uniqueness of Complex', content: <span>Let <Latex math={String.raw`x=(a,b)`} /> and <Latex math={String.raw`y=(c,d)`} />. <Latex math={String.raw`x=y \iff a=c \land b=d`} /></span>, isDarkMode } 
      },
    ], 
    edges: [
      { id: 'e-fa1', source: 'f-ax-root', target: 'fa-1', animated: true },
      { id: 'e-fa2', source: 'f-ax-root', target: 'fa-2', animated: true },
      { id: 'e-fa3', source: 'f-ax-root', target: 'fa-3', animated: true },
      { id: 'e-fa4', source: 'f-ax-root', target: 'fa-4', animated: true },
      { id: 'e-fa5', source: 'f-ax-root', target: 'fa-5', animated: true },
      { id: 'e-fa6', source: 'f-ax-root', target: 'fa-6', animated: true },
      { id: 'e-fa7', source: 'f-ax-root', target: 'fa-7', animated: true },
      { id: 'e-fa8', source: 'f-ax-root', target: 'fa-8', animated: true },
      { id: 'e-fa9', source: 'f-ax-root', target: 'fa-9', animated: true },
      { id: 'e-fa10', source: 'f-ax-root', target: 'fa-10', animated: true },
      { id: 'e-fa11', source: 'f-ax-root', target: 'fa-11', animated: true },
      { id: 'e-fa12', source: 'f-ax-root', target: 'fa-12', animated: true },
    ] 
  },

  'fields-definitions': { 
    nodes: [
      { id: 'f-def-root', type: 'mathNode', position: { x: 50, y: 525 }, data: { title: 'Fields: Definitions', content: 'Click any definition to view it as an index card!', isDarkMode } },
      { 
        id: 'fd-1', type: 'mathNode', position: { x: 450, y: 50 }, 
        data: { 
          title: 'Ordered Field', 
          content: (
            <div>
              <span>Let F be a field. F is ordered if:</span><br />
              <Latex math={String.raw`1. \forall x,y,z \in F, y < z \implies x + y < x + z`} /><br />
              <Latex math={String.raw`2. \forall x,y \in F, (x > 0 \land y > 0) \implies xy > 0`} />
            </div>
          ), isDarkMode 
        } 
      },
      { 
        id: 'fd-2', type: 'mathNode', position: { x: 450, y: 250 }, 
        data: { 
          title: 'Extended System of ℝ', 
          content: (
            <div>
              <Latex math={String.raw`\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}`} /><br/>
              <Latex math={String.raw`\forall x \in \mathbb{R}, -\infty < x < +\infty`} /><br/>
              <span>If E is not bounded above, </span><Latex math={String.raw`\sup E = +\infty`} />
            </div>
          ), isDarkMode 
        } 
      },
      { id: 'fd-3', type: 'mathNode', position: { x: 450, y: 450 }, data: { title: 'Ordered Pair', content: <Latex math={String.raw`(a,b) \neq (b,a) \text{ if } a \neq b`} />, isDarkMode } },
      { id: 'fd-4', type: 'mathNode', position: { x: 450, y: 600 }, data: { title: 'Imaginary Number', content: <Latex math={String.raw`i = (0,1) \implies i^2 = -1`} />, isDarkMode } },
      { id: 'fd-5', type: 'mathNode', position: { x: 450, y: 750 }, data: { title: 'Complex Number', content: <span>Ordered pair of real numbers <Latex math={String.raw`(a,b)`} /></span>, isDarkMode } },
      { 
        id: 'fd-6', type: 'mathNode', position: { x: 450, y: 900 }, 
        data: { title: 'Sum of Complex Numbers', content: <span>If <Latex math={String.raw`x=(a,b)`} /> and <Latex math={String.raw`y=(c,d)`} />, then <Latex math={String.raw`x+y = (a+c, b+d)`} /></span>, isDarkMode } 
      },
      { 
        id: 'fd-7', type: 'mathNode', position: { x: 450, y: 1050 }, 
        data: { title: 'Product of Complex Numbers', content: <span>If <Latex math={String.raw`x=(a,b)`} /> and <Latex math={String.raw`y=(c,d)`} />, then <Latex math={String.raw`xy = (ac-bd, ad+bc)`} /></span>, isDarkMode } 
      }
    ], 
    edges: [
      { id: 'e-fd1', source: 'f-def-root', target: 'fd-1', animated: true },
      { id: 'e-fd2', source: 'f-def-root', target: 'fd-2', animated: true },
      { id: 'e-fd3', source: 'f-def-root', target: 'fd-3', animated: true },
      { id: 'e-fd4', source: 'f-def-root', target: 'fd-4', animated: true },
      { id: 'e-fd5', source: 'f-def-root', target: 'fd-5', animated: true },
      { id: 'e-fd6', source: 'f-def-root', target: 'fd-6', animated: true },
      { id: 'e-fd7', source: 'f-def-root', target: 'fd-7', animated: true }
    ] 
  },

  'fields-propositions': { 
    nodes: [
      { id: 'f-prop-root', type: 'mathNode', position: { x: 50, y: 875 }, data: { title: 'Fields: Propositions', content: (<div>Propositions<br/><Latex math={String.raw`\forall x,y,z \in F`} /></div>), isDarkMode } },
      { id: 'fp-1', type: 'mathNode', position: { x: 450, y: 50 }, data: { title: 'Cancellation (+)', content: <Latex math={String.raw`x + y = x + z \implies y = z`} />, isDarkMode } },
      { id: 'fp-2', type: 'mathNode', position: { x: 450, y: 200 }, data: { title: 'Unique Element (+)', content: <Latex math={String.raw`x + y = x \implies y = 0`} />, isDarkMode } },
      { id: 'fp-3', type: 'mathNode', position: { x: 450, y: 350 }, data: { title: 'Unique Inverse (+)', content: <Latex math={String.raw`x + y = 0 \implies y = -x`} />, isDarkMode } },
      { id: 'fp-4', type: 'mathNode', position: { x: 450, y: 500 }, data: { title: 'Inv of Inv (+)', content: <Latex math={String.raw`-(-x) = x`} />, isDarkMode } },
      { id: 'fp-5', type: 'mathNode', position: { x: 450, y: 650 }, data: { title: 'Cancellation (*)', content: <Latex math={String.raw`(x \neq 0 \land xy = xz) \implies y = z`} />, isDarkMode } },
      { id: 'fp-6', type: 'mathNode', position: { x: 450, y: 800 }, data: { title: 'Unique Element (*)', content: <Latex math={String.raw`(x \neq 0 \land xy = x) \implies y = 1`} />, isDarkMode } },
      { id: 'fp-7', type: 'mathNode', position: { x: 450, y: 950 }, data: { title: 'Unique Inverse (*)', content: <Latex math={String.raw`(x \neq 0 \land xy = 1) \implies y = \frac{1}{x}`} />, isDarkMode } },
      { id: 'fp-8', type: 'mathNode', position: { x: 450, y: 1100 }, data: { title: 'Inv of Inv (*)', content: <Latex math={String.raw`x \neq 0 \implies \frac{1}{(1/x)} = x`} />, isDarkMode } },
      { id: 'fp-9', type: 'mathNode', position: { x: 450, y: 1250 }, data: { title: 'Order of Inv (+)', content: <Latex math={String.raw`x > 0 \implies -x < 0`} />, isDarkMode } },
      { id: 'fp-10', type: 'mathNode', position: { x: 450, y: 1400 }, data: { title: 'Inequality of (*)', content: <Latex math={String.raw`(x > 0 \land y < z) \implies xy < xz`} />, isDarkMode } },
      { id: 'fp-11', type: 'mathNode', position: { x: 450, y: 1550 }, data: { title: 'Positivity of Squares', content: <Latex math={String.raw`x \neq 0 \implies x^2 > 0`} />, isDarkMode } },
      { id: 'fp-12', type: 'mathNode', position: { x: 450, y: 1700 }, data: { title: 'Inequality of Inv (*)', content: <Latex math={String.raw`0 < x < y \implies 0 < \frac{1}{y} < \frac{1}{x}`} />, isDarkMode } },
    ], 
    edges: [
      { id: 'e-fp1', source: 'f-prop-root', target: 'fp-1', animated: true },
      { id: 'e-fp2', source: 'f-prop-root', target: 'fp-2', animated: true },
      { id: 'e-fp3', source: 'f-prop-root', target: 'fp-3', animated: true },
      { id: 'e-fp4', source: 'f-prop-root', target: 'fp-4', animated: true },
      { id: 'e-fp5', source: 'f-prop-root', target: 'fp-5', animated: true },
      { id: 'e-fp6', source: 'f-prop-root', target: 'fp-6', animated: true },
      { id: 'e-fp7', source: 'f-prop-root', target: 'fp-7', animated: true },
      { id: 'e-fp8', source: 'f-prop-root', target: 'fp-8', animated: true },
      { id: 'e-fp9', source: 'f-prop-root', target: 'fp-9', animated: true },
      { id: 'e-fp10', source: 'f-prop-root', target: 'fp-10', animated: true },
      { id: 'e-fp11', source: 'f-prop-root', target: 'fp-11', animated: true },
      { id: 'e-fp12', source: 'f-prop-root', target: 'fp-12', animated: true },
    ] 
  },

  'fields-theorems': { 
    nodes: [
      { id: 'f-thm-root', type: 'mathNode', position: { x: 50, y: 750 }, data: { title: 'Fields: Theorems', content: 'Click on any theorem to get hints on how to prove it!', isDarkMode } },
      { 
        id: 'ft-1', type: 'mathNode', position: { x: 470, y: 50 }, 
        data: { 
          title: 'Existence of Reals', 
          content: (
            <div>
              <Latex math={String.raw`\exists`} /><span> an ordered field </span><Latex math={String.raw`\mathbb{R}`} /><span> with the supremum property.</span><br/>
              <span>Furthermore, </span><Latex math={String.raw`\mathbb{R}`} /><span> contains </span><Latex math={String.raw`\mathbb{Q}`} /><span> as a subfield.</span>
            </div>
          ), description: (
  <div>
    <span>Proof Hint: Construct the real numbers from the rational numbers </span><Latex math={String.raw`\mathbb{Q}`} /><span> using either Dedekind cuts (partitions of </span><Latex math={String.raw`\mathbb{Q}`} /><span>) or equivalence classes of Cauchy sequences of rational numbers, then prove this new set satisfies the Least Upper Bound Property.</span>
  </div>
), isDarkMode 
        } 
      },
      { 
        id: 'ft-2', type: 'mathNode', position: { x: 470, y: 250 }, 
        data: { 
          title: 'Archimedean Property of ℝ', 
          content: (
            <div>
              <Latex math={String.raw`\forall x, y \in \mathbb{R}`} /><span> where </span><Latex math={String.raw`x > 0`} />, <br/>
              <Latex math={String.raw`\exists n \in \mathbb{Z}^+ \text{ such that } nx > y`} /><span>.</span>
            </div>
          ), description: (
  <div>
    <span>Proof Hint: Assume for contradiction that the set of natural numbers </span><Latex math={String.raw`\mathbb{N}`} /><span> is bounded above in </span><Latex math={String.raw`\mathbb{R}`} /><span>. Use the Supremum Property to find its supremum </span><Latex math={String.raw`\alpha`} /><span>, and show that </span><Latex math={String.raw`\alpha - 1`} /><span> cannot be an upper bound, yielding a natural number </span><Latex math={String.raw`n > \alpha - 1`} /><span>, which means </span><Latex math={String.raw`n + 1 > \alpha`} /><span> (a contradiction).</span>
  </div>
), isDarkMode
        } 
      },
      { 
        id: 'ft-3', type: 'mathNode', position: { x: 470, y: 450 }, 
        data: { 
          title: 'Density of ℚ in ℝ', 
          content: (
            <div>
              <Latex math={String.raw`\forall x, y \in \mathbb{R}`} /><span> where </span><Latex math={String.raw`x < y`} />, <br/>
              <Latex math={String.raw`\exists \frac{p}{q} \in \mathbb{Q} \text{ such that } x < \frac{p}{q} < y`} /><span>.</span>
            </div>
          ), description: (
  <div>
    <span>Proof Hint: For any </span><Latex math={String.raw`x < y`} /><span>, use the Archimedean property to choose an integer </span><Latex math={String.raw`n`} /><span> large enough so that </span><Latex math={String.raw`n(y - x) > 1`} /><span>. Then, show there must exist an integer </span><Latex math={String.raw`m`} /><span> such that </span><Latex math={String.raw`nx < m < ny`} /><span>, which gives the rational number </span><Latex math={String.raw`x < \frac{m}{n} < y`} /><span>.</span>
  </div>
), isDarkMode
        } 
      },
      { 
        id: 'ft-4', type: 'mathNode', position: { x: 470, y: 650 }, 
        data: { title: 'The Complex Field', content: <span>Satisfies field definitions with <Latex math={String.raw`(0,0)`} /> as neutral additive and <Latex math={String.raw`(1,0)`} /> as neutral multiplicative.</span>, description: (
  <div>
    <span>Proof Hint: Define addition and multiplication on ordered pairs </span><Latex math={String.raw`(a,b) \in \mathbb{R}^2`} /><span> according to complex arithmetic rules. Then, algebraically verify all 9 field axioms, explicitly constructing the additive identity </span><Latex math={String.raw`(0,0)`} /><span>, multiplicative identity </span><Latex math={String.raw`(1,0)`} /><span>, and the multiplicative inverse is </span><Latex math={String.raw`\left(\frac{a}{a^2+b^2}, \frac{-b}{a^2+b^2}\right)`} /><span>.</span>
  </div>
), isDarkMode } 
      },
      { 
        id: 'ft-5', type: 'mathNode', position: { x: 470, y: 850 }, 
        data: { 
          title: 'Real Subset of Complex', 
          content: (
            <div>
              <Latex math={String.raw`\forall a,b \in \mathbb{R}:`} /><br/>
              <Latex math={String.raw`(a,0) + (b,0) = (a+b, 0)`} /><br/>
              <Latex math={String.raw`(a,0)(b,0) = (ab, 0)`} />
            </div>
          ),description: (
  <div>
    <span>Proof Hint: Define an injective field homomorphism </span><Latex math={String.raw`\phi: \mathbb{R} \to \mathbb{C}`} /><span> given by </span><Latex math={String.raw`\phi(x) = (x,0)`} /><span>. This embeds </span><Latex math={String.raw`\mathbb{R}`} /><span> into </span><Latex math={String.raw`\mathbb{C}`} /><span> by showing that the subfield of complex numbers with a zero imaginary part is structurally identical (isomorphic) to the real numbers.</span>
  </div>
), isDarkMode 
        } 
      },
      { 
        id: 'ft-6', type: 'mathNode', position: { x: 470, y: 1050 }, 
        data: { title: 'ℂ is Not Ordered', content: <span>The complex plane is not an ordered field because <Latex math={String.raw`i^2 = -1 < 0`} />, violating positivity properties.</span>, description: (
  <div>
    <span>Proof Hint: Assume for contradiction that </span><Latex math={String.raw`\mathbb{C}`} /><span> is an ordered field, which requires the square of any non-zero element to be positive, implying </span><Latex math={String.raw`1^2 = 1 > 0`} /><span>. However, this also forces </span><Latex math={String.raw`i^2 = -1 > 0`} /><span>, and adding these two inequalities together yields </span><Latex math={String.raw`0 > 0`} /><span>, an immediate contradiction.</span>
  </div>
), isDarkMode } 
      },
      { 
        id: 'ft-7', type: 'mathNode', position: { x: 470, y: 1250 }, 
        data: { 
          title: 'Conjugate of Complex', 
          content: (
            <div>
              <span>Let </span><Latex math={String.raw`z = a + bi`} /><span>. Its conjugate is </span><Latex math={String.raw`\bar{z} = a - bi`} /><span>.</span><br/>
              <span>Where </span><Latex math={String.raw`a = \text{Re}(z)`} /><span> and </span><Latex math={String.raw`b = \text{Im}(z)`} /><span>.</span>
            </div>
          ), description: (
  <div>
    <span>Proof Hint: To prove the algebraic consistency of the conjugate (such as </span><Latex math={String.raw`\overline{z+w} = \overline{z} + \overline{w}`} /><span> and </span><Latex math={String.raw`\overline{zw} = \overline{z}\overline{w}`} /><span>), expand the complex numbers into their real and imaginary components (</span><Latex math={String.raw`z = a + bi`} /><span> and </span><Latex math={String.raw`w = c + di`} /><span>). Then, apply the definitions of complex arithmetic and conjugation directly to both sides of the equations to show they expand identically.</span>
  </div>
), isDarkMode 
        } 
      },
      { 
        id: 'ft-8', type: 'mathNode', position: { x: 470, y: 1450 }, 
        data: { 
          title: 'Cauchy-Schwarz Inequality', 
          content: (
            <div>
              <span>For complex numbers </span><Latex math={String.raw`a_1, \dots, a_n`} /><span> and </span><Latex math={String.raw`b_1, \dots, b_n`} /><span>:</span><br/>
              <Latex math={String.raw`\left| \sum_{j=1}^n a_j \overline{b_j} \right|^2 \leq \sum_{j=1}^n |a_j|^2 \sum_{j=1}^n |b_j|^2`} />
            </div>
          ), description: (
  <div>
    <span>Proof Hint: Consider the quadratic polynomial </span><Latex math={String.raw`f(t) = \sum(a_i - tb_i)^2 \ge 0`} /><span> (or use the vector dot product </span><Latex math={String.raw`||x - ty||^2 \ge 0`} /><span>). Expand it into the form </span><Latex math={String.raw`At^2 + Bt + C \ge 0`} /><span>, and set its discriminant </span><Latex math={String.raw`B^2 - 4AC \le 0`} /><span> to yield the inequality.</span>
  </div>
), isDarkMode 
        } 
      }
    ], 
    edges: [
      { id: 'e-ft1', source: 'f-thm-root', target: 'ft-1', animated: true },
      { id: 'e-ft2', source: 'f-thm-root', target: 'ft-2', animated: true },
      { id: 'e-ft3', source: 'f-thm-root', target: 'ft-3', animated: true },
      { id: 'e-ft4', source: 'f-thm-root', target: 'ft-4', animated: true },
      { id: 'e-ft5', source: 'f-thm-root', target: 'ft-5', animated: true },
      { id: 'e-ft6', source: 'f-thm-root', target: 'ft-6', animated: true },
      { id: 'e-ft7', source: 'f-thm-root', target: 'ft-7', animated: true },
      { id: 'e-ft8', source: 'f-thm-root', target: 'ft-8', animated: true }
    ] 
  },
  
  // ==========================================
  // 3. TOPOLOGY ROUTING & CONTENT
  // ==========================================
  'topology-menu': {
    nodes: [
      { id: 'top-root', type: 'mathNode', position: { x: 50, y: 200 }, data: { title: 'Subject', content: 'Topology of Metric Spaces', isDarkMode } },
      { id: 'top-cat-def', type: 'mathNode', position: { x: 400, y: 200 }, data: { title: 'Category', content: 'Definitions', isDarkMode, navigateTo: 'topology-definitions' } },
      { id: 'top-cat-thm', type: 'mathNode', position: { x: 400, y: 350 }, data: { title: 'Category', content: 'Theorems', isDarkMode, navigateTo: 'topology-theorems' } },
    ],
    edges: [
      { id: 'e-top-2', source: 'top-root', target: 'top-cat-def', animated: true },
      { id: 'e-top-3', source: 'top-root', target: 'top-cat-thm', animated: true },
    ]
  },
  
  
  'topology-definitions': { 
    nodes: [
      { id: 't-def-root', type: 'mathNode', position: { x: 50, y: 1700 }, data: { title: 'Topology: Definitions', content: 'Click any definition to view it as an index card!', isDarkMode } },
      { id: 'td-1', type: 'mathNode', position: { x: 480, y: 50 }, data: { title: 'Metric Space', content: (<div><span>A set X with a distance function </span><Latex math={String.raw`d(p,q) \in \mathbb{R}`} /><span> satisfying:</span><br/><Latex math={String.raw`1. \ d(p,q) > 0 \text{ if } p \neq q`} /><br/><Latex math={String.raw`2. \ d(p,q) = 0 \iff p = q`} /><br/><Latex math={String.raw`3. \ d(p,q) = d(q,p)`} /><br/><Latex math={String.raw`4. \ d(p,q) \le d(p,r) + d(r,q) \ \forall r \in X`} /></div>), isDarkMode } },
      { id: 'td-2', type: 'mathNode', position: { x: 480, y: 250 }, data: { title: 'Segment', content: <Latex math={String.raw`(a,b) = \{x \in \mathbb{R} \mid a < x < b\}`} />, isDarkMode } },
      { id: 'td-3', type: 'mathNode', position: { x: 480, y: 400 }, data: { title: 'Interval', content: <Latex math={String.raw`[a,b] = \{x \in \mathbb{R} \mid a \le x \le b\}`} />, isDarkMode } },
      { id: 'td-4', type: 'mathNode', position: { x: 480, y: 550 }, data: { title: 'Semi-Open Intervals', content: (<div><Latex math={String.raw`[a,b) = \{x \mid a \le x < b\}`} /><br/><Latex math={String.raw`(a,b] = \{x \mid a < x \le b\}`} /></div>), isDarkMode } },
      { id: 'td-5', type: 'mathNode', position: { x: 480, y: 700 }, data: { title: 'K-Cell', content: (<div><span>Set of all </span><Latex math={String.raw`x = (x_1, \dots, x_k) \in \mathbb{R}^k`} /><br/><span>where if </span><Latex math={String.raw`a_i \le b_i`} /><span>, then </span><Latex math={String.raw`a_i \le x_i \le b_i \ (1 \le i \le k)`} /></div>), isDarkMode } },
      { id: 'td-6', type: 'mathNode', position: { x: 480, y: 850 }, data: { title: 'Ball', content: (<div><span>Center </span><Latex math={String.raw`x \in \mathbb{R}^k`} /><span>, radius </span><Latex math={String.raw`r > 0`} /><span>:</span><br/><span>Open: </span><Latex math={String.raw`\{y \in \mathbb{R}^k \mid \|y-x\| < r\}`} /><br/><span>Closed: </span><Latex math={String.raw`\{y \in \mathbb{R}^k \mid \|y-x\| \le r\}`} /></div>), isDarkMode } },
      { id: 'td-7', type: 'mathNode', position: { x: 480, y: 1050 }, data: { title: 'Convexity', content: (<div><span>Set E is convex if </span><Latex math={String.raw`\forall x,y \in E \text{ and } 0 < \lambda < 1`} /><span>:</span><br/><Latex math={String.raw`\lambda x + (1-\lambda)y \in E`} /></div>), isDarkMode } },
      { id: 'td-8', type: 'mathNode', position: { x: 480, y: 1200 }, data: { title: 'Neighbourhood', content: (<div><span>Of a point p, denoted </span><Latex math={String.raw`N_r(p)`} /><span>:</span><br/><Latex math={String.raw`N_r(p) = \{q \in X \mid d(p,q) < r\}`} /></div>), isDarkMode } }, 
      { id: 'td-9', type: 'mathNode', position: { x: 480, y: 1350 }, data: { title: 'Limit Point', content: (<div><span>p is a limit point of E if all neighbourhoods of p contain a point </span><Latex math={String.raw`q \neq p`} /><span> where </span><Latex math={String.raw`q \in E`} /><span>.</span></div>), isDarkMode } },
      { id: 'td-10', type: 'mathNode', position: { x: 480, y: 1500 }, data: { title: 'Isolated Point', content: (<div><Latex math={String.raw`p \in E`} /><span> and p is not a limit point of E.</span></div>), isDarkMode } },
      { id: 'td-11', type: 'mathNode', position: { x: 480, y: 1650 }, data: { title: 'Closed Set', content: 'E is closed if all of its limit points belong to E.', isDarkMode } },
      { id: 'td-12', type: 'mathNode', position: { x: 480, y: 1800 }, data: { title: 'Interior Point', content: (<div><span>p is an interior point of E if </span><Latex math={String.raw`\exists`} /><span> a neighbourhood N of p where </span><Latex math={String.raw`N \subset E`} /><span>.</span></div>), isDarkMode } },
      { id: 'td-13', type: 'mathNode', position: { x: 480, y: 1950 }, data: { title: 'Open Set', content: 'E is open if all of its points are interior points.', isDarkMode } },
      { id: 'td-14', type: 'mathNode', position: { x: 480, y: 2100 }, data: { title: 'Complement', content: (<div><Latex math={String.raw`E^c = \{p \in X \mid p \notin E\}`} /></div>), isDarkMode } },
      { id: 'td-15', type: 'mathNode', position: { x: 480, y: 2250 }, data: { title: 'Perfect Set', content: 'E is perfect if it is closed and all of its points are limit points.', isDarkMode } },
      { id: 'td-16', type: 'mathNode', position: { x: 480, y: 2400 }, data: { title: 'Bounded', content: (<div><span>If </span><Latex math={String.raw`\exists M \in \mathbb{R}`} /><span> and </span><Latex math={String.raw`q \in X`} /><span> such that </span><Latex math={String.raw`d(p,q) < M \ \forall p \in E`} /><span>.</span></div>), isDarkMode } },
      { id: 'td-17', type: 'mathNode', position: { x: 480, y: 2550 }, data: { title: 'Dense', content: 'E is dense in X if all points of X are a limit point of E, or a point of E (or both).', isDarkMode } },
      { id: 'td-18', type: 'mathNode', position: { x: 480, y: 2700 }, data: { title: "Set of Limit Points (E')", content: (<div><Latex math={String.raw`E'`} /><span> is the set of all limit points of E.</span></div>), isDarkMode } },
      { id: 'td-19', type: 'mathNode', position: { x: 480, y: 2850 }, data: { title: 'Interior of Set (E°)', content: (<div><Latex math={String.raw`E^\circ`} /><span> is the set of all interior points of E.</span></div>), isDarkMode } },
      { id: 'td-20', type: 'mathNode', position: { x: 480, y: 3000 }, data: { title: 'Closure', content: (<div><Latex math={String.raw`\bar{E} = E \cup E'`} /></div>), isDarkMode } },
      { id: 'td-21', type: 'mathNode', position: { x: 480, y: 3150 }, data: { title: 'Relative Openness', content: (<div><span>E is relatively open in Y if </span><Latex math={String.raw`\forall p \in E, \exists r > 0`} /><br/><span>such that </span><Latex math={String.raw`q \in E`} /><span> when </span><Latex math={String.raw`d(p,q) < r`} /><span> and </span><Latex math={String.raw`q \in Y`} /><span>.</span></div>), isDarkMode } },
      { id: 'td-22', type: 'mathNode', position: { x: 480, y: 3300 }, data: { title: 'Open Covering', content: (<div><span>A collection </span><Latex math={String.raw`\{G_\alpha\}`} /><span> of open subsets of X</span><br/><span>such that </span><Latex math={String.raw`E \subset \bigcup_\alpha G_\alpha`} /><span>.</span></div>), isDarkMode } },
      { id: 'td-23', type: 'mathNode', position: { x: 480, y: 3450 }, data: { title: 'Compact Set', content: 'If all open coverings of the set contain a finite sub-covering.', isDarkMode } },
    ], 
    edges: [
      { id: 'e-td1', source: 't-def-root', target: 'td-1', animated: true }, { id: 'e-td2', source: 't-def-root', target: 'td-2', animated: true },
      { id: 'e-td3', source: 't-def-root', target: 'td-3', animated: true }, { id: 'e-td4', source: 't-def-root', target: 'td-4', animated: true },
      { id: 'e-td5', source: 't-def-root', target: 'td-5', animated: true }, { id: 'e-td6', source: 't-def-root', target: 'td-6', animated: true },
      { id: 'e-td7', source: 't-def-root', target: 'td-7', animated: true }, { id: 'e-td8', source: 't-def-root', target: 'td-8', animated: true },
      { id: 'e-td9', source: 't-def-root', target: 'td-9', animated: true }, { id: 'e-td10', source: 't-def-root', target: 'td-10', animated: true },
      { id: 'e-td11', source: 't-def-root', target: 'td-11', animated: true }, { id: 'e-td12', source: 't-def-root', target: 'td-12', animated: true },
      { id: 'e-td13', source: 't-def-root', target: 'td-13', animated: true }, { id: 'e-td14', source: 't-def-root', target: 'td-14', animated: true },
      { id: 'e-td15', source: 't-def-root', target: 'td-15', animated: true }, { id: 'e-td16', source: 't-def-root', target: 'td-16', animated: true },
      { id: 'e-td17', source: 't-def-root', target: 'td-17', animated: true }, { id: 'e-td18', source: 't-def-root', target: 'td-18', animated: true },
      { id: 'e-td19', source: 't-def-root', target: 'td-19', animated: true }, { id: 'e-td20', source: 't-def-root', target: 'td-20', animated: true },
      { id: 'e-td21', source: 't-def-root', target: 'td-21', animated: true }, { id: 'e-td22', source: 't-def-root', target: 'td-22', animated: true },
      { id: 'e-td23', source: 't-def-root', target: 'td-23', animated: true },
    ] 
  },

  'topology-theorems': { 
    nodes: [
      { id: 't-thm-root', type: 'mathNode', position: { x: 50, y: 1550 }, data: { title: 'Topology: Theorems', content: 'Click on any theorem to get hints on how to prove it!', isDarkMode } },
      
      { id: 'tt-1', type: 'mathNode', position: { x: 500, y: 50 }, data: { title: 'Openness of Neighbourhoods', content: 'All neighbourhoods are open sets.', description: (
  <div>
    <span>Proof Hint: For any point </span><Latex math={String.raw`y`} /><span> in an </span><Latex math={String.raw`\epsilon`} /><span>-neighborhood </span><Latex math={String.raw`N_\epsilon(x)`} /><span>, calculate the distance </span><Latex math={String.raw`d = d(x,y)`} /><span>. Then, use the triangle inequality to show that a smaller neighborhood centered at </span><Latex math={String.raw`y`} /><span> with radius </span><Latex math={String.raw`\delta = \epsilon - d`} /><span> is entirely contained within </span><Latex math={String.raw`N_\epsilon(x)`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-2', type: 'mathNode', position: { x: 500, y: 200 }, data: { title: 'Infinity of Points in a Neighbourhood', content: 'If p is a limit point of E, all neighbourhoods of p contain infinite points of E.', description: (
  <div>
    <span>Proof Hint: Assume for contradiction that a neighborhood of a limit point contains only finitely many points of a set. Find the minimum distance from the center to these finitely many points, and construct a smaller neighborhood using this minimum radius that contains no points, contradicting the definition of a limit point.</span>
  </div>
), isDarkMode } },
      { id: 'tt-3', type: 'mathNode', position: { x: 500, y: 350 }, data: { title: "De Morgan's Law", content: (<div><Latex math={String.raw`\left( \bigcup_\alpha E_\alpha \right)^c = \bigcap_\alpha (E_\alpha^c)`} /></div>), description: (
  <div>
    <span>Proof Hint: Prove this set-theoretic identity by showing mutual containment: take an element </span><Latex math={String.raw`x \in (\bigcup A_\alpha)^c`} /><span>, show it belongs to no </span><Latex math={String.raw`A_\alpha`} /><span> meaning it belongs to every </span><Latex math={String.raw`A_\alpha^c`} /><span>, and thus </span><Latex math={String.raw`x \in \bigcap (A_\alpha^c)`} /><span> (and vice versa).</span>
  </div>
), isDarkMode } },
      { id: 'tt-4', type: 'mathNode', position: { x: 500, y: 500 }, data: { title: 'Complement of Open is Closed', content: (<div><span>A set E is open if and only if its complement </span><Latex math={String.raw`E^c`} /><span> is closed.</span></div>), description: (
  <div>
    <span>Proof Hint: By definition, a set is closed if it contains all its limit points. To show its complement </span><Latex math={String.raw`U`} /><span> is open, pick any </span><Latex math={String.raw`x \in U`} /><span>, note that </span><Latex math={String.raw`x`} /><span> cannot be a limit point of the closed set, and conclude there must exist a neighborhood around </span><Latex math={String.raw`x`} /><span> entirely contained within </span><Latex math={String.raw`U`} /><span>.</span>
  </div>
), isDarkMode} },
      { id: 'tt-5', type: 'mathNode', position: { x: 500, y: 650 }, data: { title: 'Arbitrary Union of Open Sets', content: (<div><span>For all collections </span><Latex math={String.raw`\{G_\alpha\}`} /><span> of open sets, </span><Latex math={String.raw`\bigcup_\alpha G_\alpha`} /><span> is open.</span></div>), description: (
  <div>
    <span>Proof Hint: Take any point </span><Latex math={String.raw`x`} /><span> in the union </span><Latex math={String.raw`\bigcup U_\alpha`} /><span>. Since </span><Latex math={String.raw`x`} /><span> must belong to at least one specific open set </span><Latex math={String.raw`U_{\alpha_0}`} /><span>, there exists a neighborhood around </span><Latex math={String.raw`x`} /><span> fully contained in </span><Latex math={String.raw`U_{\alpha_0}`} /><span>, which by extension is fully contained in the entire union.</span>
  </div>
), isDarkMode } },
      { id: 'tt-6', type: 'mathNode', position: { x: 500, y: 800 }, data: { title: 'Arbitrary Intersection of Closed Sets', content: (<div><span>For all collections </span><Latex math={String.raw`\{F_\alpha\}`} /><span> of closed sets, </span><Latex math={String.raw`\bigcap_\alpha F_\alpha`} /><span> is closed.</span></div>), description: (
  <div>
    <span>Proof Hint: Take the complement of the arbitrary intersection and apply De Morgan's Laws to transform it into an arbitrary union of open sets (the complements). Since this union is open, its complement—the original intersection—must be closed.</span>
  </div>
), isDarkMode } },
      { id: 'tt-7', type: 'mathNode', position: { x: 500, y: 950 }, data: { title: 'Finite Intersection of Open Sets', content: (<div><span>For a finite collection </span><Latex math={String.raw`G_1 \dots G_n`} /><span>, </span><Latex math={String.raw`\bigcap_{i=1}^n G_i`} /><span> is open.</span></div>), description: (
  <div>
    <span>Proof Hint: For a point </span><Latex math={String.raw`x`} /><span> in </span><Latex math={String.raw`\bigcap_{i=1}^n U_i`} /><span>, each open set </span><Latex math={String.raw`U_i`} /><span> provides a neighborhood </span><Latex math={String.raw`N_{\epsilon_i}(x) \subseteq U_i`} /><span>. Choose the minimum radius </span><Latex math={String.raw`\epsilon = \min(\epsilon_1, \dots, \epsilon_n)`} /><span>, which is guaranteed to be strictly greater than zero because the collection is finite, ensuring </span><Latex math={String.raw`N_\epsilon(x) \subseteq \bigcap U_i`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-8', type: 'mathNode', position: { x: 500, y: 1100 }, data: { title: 'Finite Union of Closed Sets', content: (<div><span>For a finite collection </span><Latex math={String.raw`F_1 \dots F_n`} /><span>, </span><Latex math={String.raw`\bigcup_{i=1}^n F_i`} /><span> is closed.</span></div>), description: (
  <div>
    <span>Proof Hint: Take the complement of the finite union and use De Morgan's Laws to rewrite it as a finite intersection of open sets (the complements). Since a finite intersection of open sets is open, the original union must be closed.</span>
  </div>
), isDarkMode } },
      { id: 'tt-9', type: 'mathNode', position: { x: 500, y: 1250 }, data: { title: 'Topological Closure of a Set', content: (<div><Latex math={String.raw`\bar{E}`} /><span> is closed.</span><br/><Latex math={String.raw`E = \bar{E} \iff E \text{ is closed}`} /><br/><Latex math={String.raw`\bar{E} \subset F \ \forall \text{ closed } F \supset E`} /></div>),description: (
  <div>
    <span>Proof Hint: Prove that the closure </span><Latex math={String.raw`\bar{A} = A \cup A'`} /><span> is closed by showing its complement is open. If </span><Latex math={String.raw`x \notin \bar{A}`} /><span>, then </span><Latex math={String.raw`x`} /><span> is neither in </span><Latex math={String.raw`A`} /><span> nor a limit point of </span><Latex math={String.raw`A`} /><span>, meaning there is a neighborhood around </span><Latex math={String.raw`x`} /><span> completely disjoint from </span><Latex math={String.raw`A`} /><span>, rendering the complement open.</span>
  </div>
), isDarkMode } },
      { id: 'tt-10', type: 'mathNode', position: { x: 500, y: 1450 }, data: { title: 'Supremum in the Closure', content: (<div><span>If E is bounded above and </span><Latex math={String.raw`y = \sup E`} /><span>, then </span><Latex math={String.raw`y \in \bar{E}`} /><span>.</span></div>), description: (
  <div>
    <span>Proof Hint: Let </span><Latex math={String.raw`s = \sup E`} /><span>. For any </span><Latex math={String.raw`\epsilon > 0`} /><span>, the definition of a supremum guarantees there is an element </span><Latex math={String.raw`x \in E`} /><span> such that </span><Latex math={String.raw`s - \epsilon < x \le s`} /><span>, meaning every neighborhood of </span><Latex math={String.raw`s`} /><span> intersects </span><Latex math={String.raw`E`} /><span>, which places </span><Latex math={String.raw`s`} /><span> in the closure </span><Latex math={String.raw`\bar{E}`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-11', type: 'mathNode', position: { x: 500, y: 1600 }, data: { title: 'Characterization of Relatively Open', content: (<div><Latex math={String.raw`E \subset Y \subset X`} /><span>. E is relatively open in Y </span><Latex math={String.raw`\iff E = Y \cap G`} /><span> for some open </span><Latex math={String.raw`G \subset X`} /><span>.</span></div>), description: (
  <div>
    <span>Proof Hint: To prove </span><Latex math={String.raw`V \subseteq Y`} /><span> is relatively open if and only if </span><Latex math={String.raw`V = U \cap Y`} /><span> for some open </span><Latex math={String.raw`U`} /><span>, use the metric space definition: show that the neighborhoods restricted to </span><Latex math={String.raw`Y`} /><span> (</span><Latex math={String.raw`N_\epsilon(x) \cap Y`} /><span>) are exactly the intersection of standard open metric balls with </span><Latex math={String.raw`Y`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-12', type: 'mathNode', position: { x: 500, y: 1750 }, data: { title: 'Transitivity of Relative Compactness', content: (<div><span>Let </span><Latex math={String.raw`K \subset Y \subset X`} /><span>. K is compact in X </span><Latex math={String.raw`\iff`} /><span> K is compact in Y.</span></div>), description: (
  <div>
    <span>Proof Hint: If </span><Latex math={String.raw`A`} /><span> is compact relative to </span><Latex math={String.raw`B`} /><span> and </span><Latex math={String.raw`B`} /><span> is compact relative to </span><Latex math={String.raw`C`} /><span>, take any open cover of </span><Latex math={String.raw`A`} /><span> by open sets in </span><Latex math={String.raw`C`} /><span>. Restrict these open sets to </span><Latex math={String.raw`B`} /><span> to form an open cover of </span><Latex math={String.raw`B`} /><span>, use </span><Latex math={String.raw`B`} /><span>'s compactness to reduce it to a finite subcover, which subsequently covers </span><Latex math={String.raw`A`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-13', type: 'mathNode', position: { x: 500, y: 1900 }, data: { title: 'Closedness of Compactness', content: 'The compact subsets of metric spaces are closed.', description: (
  <div>
    <span>Proof Hint: To prove a compact subset </span><Latex math={String.raw`K`} /><span> of a metric space is closed, show its complement is open: for any </span><Latex math={String.raw`y \notin K`} /><span>, construct disjoint neighborhoods around </span><Latex math={String.raw`y`} /><span> and every </span><Latex math={String.raw`x \in K`} /><span>, use compactness to reduce these to a finite subcover of </span><Latex math={String.raw`K`} /><span>, and take the intersection of the corresponding neighborhoods around </span><Latex math={String.raw`y`} /><span> to form an open ball isolated from </span><Latex math={String.raw`K`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-14', type: 'mathNode', position: { x: 500, y: 2050 }, data: { title: 'Closed Subsets of Compacts', content: 'The closed subsets of compact sets are compact.', description: (
  <div>
    <span>Proof Hint: Let </span><Latex math={String.raw`F`} /><span> be a closed subset of a compact space </span><Latex math={String.raw`K`} /><span>. Take any open cover of </span><Latex math={String.raw`F`} /><span>, add the open complement </span><Latex math={String.raw`F^c`} /><span> to the collection to form an open cover of the entire compact space </span><Latex math={String.raw`K`} /><span>, extract a finite subcover, and remove </span><Latex math={String.raw`F^c`} /><span> to leave a finite subcover that still wraps </span><Latex math={String.raw`F`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-15', type: 'mathNode', position: { x: 500, y: 2200 }, data: { title: 'Finite Intersection Property', content: (<div><span>If finite subcollections of compacts </span><Latex math={String.raw`\{K_\alpha\}`} /><span> have non-empty intersections, then </span><Latex math={String.raw`\bigcap K_\alpha \neq \emptyset`} /><span>.</span></div>), // Union of Compact Sets is Compact
description: (
  <div>
    <span>Proof Hint: Let </span><Latex math={String.raw`A`} /><span> and </span><Latex math={String.raw`B`} /><span> be compact. Let </span><Latex math={String.raw`\{U_\alpha\}`} /><span> be an open cover of </span><Latex math={String.raw`A \cup B`} /><span>. Then </span><Latex math={String.raw`\{U_\alpha\}`} /><span> is an open cover of </span><Latex math={String.raw`A`} /><span> and an open cover of </span><Latex math={String.raw`B`} /><span>. Because </span><Latex math={String.raw`A`} /><span> and </span><Latex math={String.raw`B`} /><span> are compact, there exist finite subcovers of </span><Latex math={String.raw`A`} /><span> and </span><Latex math={String.raw`B`} /><span>, respectively. Their union is a finite subcover of </span><Latex math={String.raw`A \cup B`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'tt-16', type: 'mathNode', position: { x: 500, y: 2350 }, data: { title: 'Limit Point Compactness', content: 'If E is an infinite subset of a compact set K, E has a limit point in K.', description: (
  <div>
    <span>Proof Hint: To prove that a compact set </span><Latex math={String.raw`K`} /><span> is limit point compact, assume for contradiction it contains an infinite subset with no limit points in </span><Latex math={String.raw`K`} /><span>. This implies every point in </span><Latex math={String.raw`K`} /><span> has a neighborhood containing at most one point of the subset, creating an open cover of </span><Latex math={String.raw`K`} /><span> with no finite subcover (since the subset is infinite), which contradicts compactness.</span>
  </div>
), isDarkMode} },
      { id: 'tt-17', type: 'mathNode', position: { x: 500, y: 2500 }, data: { title: 'Nested Intervals', content: (<div><span>If </span><Latex math={String.raw`I_{n+1} \subset I_n \subset \mathbb{R}^1`} /><span>, then </span><Latex math={String.raw`\bigcap_{n=1}^\infty I_n \neq \emptyset`} /><span>.</span></div>), description: (
  <div>
    <span>Proof Hint: Let </span><Latex math={String.raw`[a_n, b_n]`} /><span> be a sequence of nested intervals. Show that the sequence of left endpoints </span><Latex math={String.raw`a_n`} /><span> is bounded above by every </span><Latex math={String.raw`b_n`} /><span>, meaning its supremum </span><Latex math={String.raw`x = \sup \{a_n\}`} /><span> exists and satisfies </span><Latex math={String.raw`a_n \le x \le b_n`} /><span> for all </span><Latex math={String.raw`n`} /><span>, placing </span><Latex math={String.raw`x`} /><span> in the intersection of all the intervals.</span>
  </div>
), isDarkMode } },
      { id: 'tt-18', type: 'mathNode', position: { x: 500, y: 2650 }, data: { title: 'Nested K-Cell Theorem', content: (<div><span>If </span><Latex math={String.raw`I_{n+1} \subset I_n`} /><span> are k-cells, then </span><Latex math={String.raw`\bigcap_{n=1}^\infty I_n \neq \emptyset`} /><span>.</span></div>),  description: (
  <div>
    <span>Proof Hint: Extend the nested interval property to </span><Latex math={String.raw`k`} /><span> dimensions by expressing the </span><Latex math={String.raw`k`} /><span>-cell as a Cartesian product of intervals </span><Latex math={String.raw`[a_{i,n}, b_{i,n}]`} /><span>. Since the intervals in each coordinate dimension are nested, applying the standard Nested Intervals Theorem to each dimension independently yields a coordinate point that simultaneously belongs to all </span><Latex math={String.raw`k`} /><span>-cells.</span>
  </div>
), isDarkMode} },
      { id: 'tt-19', type: 'mathNode', position: { x: 500, y: 2800 }, data: { title: 'Compactness of K-Cells', content: 'All k-cells are compact.', description: (
  <div>
    <span>Proof Hint: Prove this by contradiction using a multidimensional bisection method: if a </span><Latex math={String.raw`k`} /><span>-cell </span><Latex math={String.raw`I_0`} /><span> cannot be covered by a finite subcover, subdivide it into </span><Latex math={String.raw`2^k`} /><span> smaller sub-cells, choose at least one sub-cell </span><Latex math={String.raw`I_1`} /><span> that also cannot be finitely covered, and repeat this process to yield a sequence of nested </span><Latex math={String.raw`k`} /><span>-cells that contract to a single point, creating a contradiction at that point.</span>
  </div>
), isDarkMode } },
      { id: 'tt-20', type: 'mathNode', position: { x: 500, y: 2950 }, data: { title: 'Heine-Borel Theorem', content: (<div><span>In </span><Latex math={String.raw`\mathbb{R}^k`} /><span>, these are equivalent:</span><br/><span>1. E is closed and bounded</span><br/><span>2. E is compact</span><br/><span>3. Every infinite subset has a limit point in E</span></div>),description: (
  <div>
    <span>Proof Hint: To prove a subset of </span><Latex math={String.raw`\mathbb{R}^k`} /><span> is compact if and only if it is closed and bounded, show the "compact implies closed and bounded" direction using the property that metric compact sets are closed and bounded. For the reverse direction, enclose the bounded set inside a massive </span><Latex math={String.raw`k`} /><span>-cell, note that the </span><Latex math={String.raw`k`} /><span>-cell is compact, and apply the "Closed Subsets of Compacts" theorem.</span>
  </div>
),  isDarkMode} },
      { id: 'tt-21', type: 'mathNode', position: { x: 500, y: 3150 }, data: { title: 'Weierstrass Theorem', content: (<div><span>All bounded infinite subsets of </span><Latex math={String.raw`\mathbb{R}^k`} /><span> have a limit point in </span><Latex math={String.raw`\mathbb{R}^k`} /><span>.</span></div>), description: (
  <div>
    <span>Proof Hint: Let </span><Latex math={String.raw`f: K \to \mathbb{R}`} /><span> be continuous and </span><Latex math={String.raw`K`} /><span> compact. Prove that the image </span><Latex math={String.raw`f(K)`} /><span> is compact (and thus closed and bounded) by taking an open cover of </span><Latex math={String.raw`f(K)`} /><span>, pulling it back to an open cover of </span><Latex math={String.raw`K`} /><span> via continuity, and extracting a finite subcover; because </span><Latex math={String.raw`f(K)`} /><span> is bounded and contains its bounds, </span><Latex math={String.raw`f`} /><span> must attain a maximum and minimum.</span>
  </div>
), isDarkMode } },
],
    edges: [
      { id: 'e-tt1', source: 't-thm-root', target: 'tt-1', animated: true }, { id: 'e-tt2', source: 't-thm-root', target: 'tt-2', animated: true },
      { id: 'e-tt3', source: 't-thm-root', target: 'tt-3', animated: true }, { id: 'e-tt4', source: 't-thm-root', target: 'tt-4', animated: true },
      { id: 'e-tt5', source: 't-thm-root', target: 'tt-5', animated: true }, { id: 'e-tt6', source: 't-thm-root', target: 'tt-6', animated: true },
      { id: 'e-tt7', source: 't-thm-root', target: 'tt-7', animated: true }, { id: 'e-tt8', source: 't-thm-root', target: 'tt-8', animated: true },
      { id: 'e-tt9', source: 't-thm-root', target: 'tt-9', animated: true }, { id: 'e-tt10', source: 't-thm-root', target: 'tt-10', animated: true },
      { id: 'e-tt11', source: 't-thm-root', target: 'tt-11', animated: true }, { id: 'e-tt12', source: 't-thm-root', target: 'tt-12', animated: true },
      { id: 'e-tt13', source: 't-thm-root', target: 'tt-13', animated: true }, { id: 'e-tt14', source: 't-thm-root', target: 'tt-14', animated: true },
      { id: 'e-tt15', source: 't-thm-root', target: 'tt-15', animated: true }, { id: 'e-tt16', source: 't-thm-root', target: 'tt-16', animated: true },
      { id: 'e-tt17', source: 't-thm-root', target: 'tt-17', animated: true }, { id: 'e-tt18', source: 't-thm-root', target: 'tt-18', animated: true },
      { id: 'e-tt19', source: 't-thm-root', target: 'tt-19', animated: true }, { id: 'e-tt20', source: 't-thm-root', target: 'tt-20', animated: true },
      { id: 'e-tt21', source: 't-thm-root', target: 'tt-21', animated: true },
    ] 
  },
  // ==========================================
  // 4. LIMITS & CONTINUITY ROUTING & CONTENT
  // ==========================================
  'limits-menu': {
    nodes: [
      { id: 'lim-root', type: 'mathNode', position: { x: 50, y: 300 }, data: { title: 'Subject', content: 'Limits & Continuity', isDarkMode } },
      { id: 'lim-cat-def', type: 'mathNode', position: { x: 400, y: 200 }, data: { title: 'Category', content: 'Definitions', isDarkMode, navigateTo: 'limits-definitions' } },
      { id: 'lim-cat-thm', type: 'mathNode', position: { x: 400, y: 350 }, data: { title: 'Category', content: 'Theorems', isDarkMode, navigateTo: 'limits-theorems' } },
    ],
    edges: [
      { id: 'e-lim-2', source: 'lim-root', target: 'lim-cat-def', animated: true },
      { id: 'e-lim-3', source: 'lim-root', target: 'lim-cat-thm', animated: true },
    ]
  },
  
  
  'limits-definitions': { 
    nodes: [
      { id: 'l-def-root', type: 'mathNode', position: { x: 50, y: 450 }, data: { title: 'Limits & Continuity: Definitions', content: 'Click on any definition to see it as an index card!', isDarkMode } },
      
      { 
        id: 'ld-1', type: 'mathNode', position: { x: 450, y: 50 }, 
        data: { 
          title: 'Limit of a Function', 
          content: (<div><span>Let </span><Latex math={String.raw`f: E \to Y`} /><span>, and </span><Latex math={String.raw`p`} /><span> a limit point of </span><Latex math={String.raw`E`} /><span>.</span><br/><Latex math={String.raw`\lim_{x \to p} f(x) = q \iff`} /><br/><Latex math={String.raw`\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. }`} /><br/><Latex math={String.raw`0 < d_X(x,p) < \delta \implies d_Y(f(x),q) < \epsilon`} /></div>), 
          isDarkMode 
        } 
      },
      { 
        id: 'ld-2', type: 'mathNode', position: { x: 450, y: 250 }, 
        data: { 
          title: 'Continuous Function', 
          content: (<div><Latex math={String.raw`f`} /><span> is continuous at </span><Latex math={String.raw`p \in E`} /><span> if:</span><br/><Latex math={String.raw`\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } \forall x \in E`} /><br/><span>with </span><Latex math={String.raw`d_X(x,p) < \delta \implies d_Y(f(x),f(p)) < \epsilon`} /><span>.</span><br/><span>*(If p is isolated, f is always continuous at p)*</span></div>), 
          isDarkMode 
        } 
      },
      { 
        id: 'ld-3', type: 'mathNode', position: { x: 450, y: 450 }, 
        data: { 
          title: 'Boundedness Mapping', 
          content: (<div><span>A mapping </span><Latex math={String.raw`f: E \to \mathbb{R}^k`} /><span> is bounded if:</span><br/><Latex math={String.raw`\exists M \in \mathbb{R} \text{ s.t. } |f(x)| \le M \ \forall x \in E`} /></div>), 
          isDarkMode 
        } 
      },
      { 
        id: 'ld-4', type: 'mathNode', position: { x: 450, y: 650 }, 
        data: { 
          title: 'Uniform Continuity', 
          content: (
  <div>
    <span>Definition: Let </span><Latex math={String.raw`X`} /><span> and </span><Latex math={String.raw`Y`} /><span> be metric spaces. We say that a mapping </span><Latex math={String.raw`f`} /><span> from </span><Latex math={String.raw`X`} /><span> to </span><Latex math={String.raw`Y`} /><span> is uniformly continuous on </span><Latex math={String.raw`X`} /><span> if for every </span><Latex math={String.raw`\epsilon > 0`} /><span> there exists a </span><Latex math={String.raw`\delta > 0`} /><span> such that </span><Latex math={String.raw`d_Y(f(p), f(q)) < \epsilon`} /><span> for all </span><Latex math={String.raw`p`} /><span> and </span><Latex math={String.raw`q`} /><span> in </span><Latex math={String.raw`X`} /><span> for which </span><Latex math={String.raw`d_X(p, q) < \delta`} /><span>.</span>
  </div>
), isDarkMode 
        } 
      }, 
      { 
        id: 'ld-5', type: 'mathNode', position: { x: 450, y: 850 }, 
        data: { 
          title: 'Connected Sets', 
          content: (
  <div>
    <span>Definition: Two subsets </span><Latex math={String.raw`A`} /><span> and </span><Latex math={String.raw`B`} /><span> of a metric space </span><Latex math={String.raw`X`} /><span> are said to be separated if </span><Latex math={String.raw`A \cap \bar{B} = \emptyset`} /><span> and </span><Latex math={String.raw`\bar{A} \cap B = \emptyset`} /><span>. A set </span><Latex math={String.raw`E \subset X`} /><span> is said to be connected if </span><Latex math={String.raw`E`} /><span> is not the union of two non-empty separated sets.</span>
  </div>
), isDarkMode 
        } 
      }

    ],
    edges: [
      { id: 'e-ld1', source: 'l-def-root', target: 'ld-1', animated: true },
      { id: 'e-ld2', source: 'l-def-root', target: 'ld-2', animated: true },
      { id: 'e-ld3', source: 'l-def-root', target: 'ld-3', animated: true },
      { id: 'e-ld4', source: 'l-def-root', target: 'ld-4', animated: true },
      { id: 'e-ld5', source: 'l-def-root', target: 'ld-5', animated: true }
    ] 
  },

  'limits-theorems': { 
    nodes: [
      { id: 'l-thm-root', type: 'mathNode', position: { x: 50, y: 950 }, data: { title: 'Limits & Continuity: Theorems', content: 'Click on any theorem to get hints on how to prove it!', isDarkMode } },
      
      { 
        id: 'lt-1', type: 'mathNode', position: { x: 550, y: 50 }, 
        data: { 
          title: 'Sequential Characterization', 
          content: (<div><Latex math={String.raw`\lim_{x \to p} f(x) = q \iff`} /><br/><span>For every sequence </span><Latex math={String.raw`\{p_n\} \subset E`} /><span> where </span><Latex math={String.raw`p_n \neq p`} /><span> and </span><Latex math={String.raw`\lim_{n \to \infty} p_n = p`} /><span>, it follows that:</span><br/><Latex math={String.raw`\lim_{n \to \infty} f(p_n) = q`} /></div>), 
          description: (
  <div>
    <span>Proof Hint: To prove </span><Latex math={String.raw`\lim_{x \to c} f(x) = L`} /><span> is equivalent to </span><Latex math={String.raw`f(x_n) \to L`} /><span> for all </span><Latex math={String.raw`x_n \to c`} /><span>, assume the limit definition holds and use the </span><Latex math={String.raw`\epsilon-\delta`} /><span> challenge to trap the sequence tail. For the reverse, assume the limit fails, construct an </span><Latex math={String.raw`\epsilon_0`} /><span> that fails for </span><Latex math={String.raw`\delta_n = \frac{1}{n}`} /><span>, and pick a sequence of points </span><Latex math={String.raw`x_n`} /><span> that converges to </span><Latex math={String.raw`c`} /><span> but whose images </span><Latex math={String.raw`f(x_n)`} /><span> stay away from </span><Latex math={String.raw`L`} /><span>, yielding a contradiction.</span>
  </div>
), isDarkMode
        } 
      },
      { id: 'lt-2', type: 'mathNode', position: { x: 550, y: 250 }, data: { title: 'Uniqueness of Limits', content: (<div><span>If </span><Latex math={String.raw`f`} /><span> has a limit at </span><Latex math={String.raw`p`} /><span>, the limit is unique.</span></div>), description: (
  <div>
    <span>Proof Hint: Assume for contradiction that a sequence or function approaches two distinct limits, </span><Latex math={String.raw`L_1`} /><span> and </span><Latex math={String.raw`L_2`} /><span>, and set your error tolerance to half the distance between them, </span><Latex math={String.raw`\epsilon = \frac{|L_1 - L_2|}{2}`} /><span>. Apply the limit definition to show that the terms must eventually drop inside both </span><Latex math={String.raw`\epsilon`} /><span>-neighborhoods simultaneously, an impossibility that violates the triangle inequality.</span>
  </div>
), isDarkMode } },
      { 
        id: 'lt-3', type: 'mathNode', position: { x: 550, y: 400 }, 
        data: { 
          title: 'Algebraic Properties', 
          content: (<div><span>If </span><Latex math={String.raw`\lim_{x \to p} f(x) = A`} /><span> and </span><Latex math={String.raw`\lim_{x \to p} g(x) = B`} /><span>:</span><br/><Latex math={String.raw`\lim_{x \to p} (f+g)(x) = A + B`} /><br/><Latex math={String.raw`\lim_{x \to p} (fg)(x) = AB`} /><br/><Latex math={String.raw`\lim_{x \to p} (f/g)(x) = A/B \ (B \neq 0)`} /></div>), 
          description: (
  <div>
    <span>Proof Hint: Prove properties like </span><Latex math={String.raw`\lim(f+g) = \lim f + \lim g`} /><span> by applying the triangle inequality to the absolute error expression </span><Latex math={String.raw`|(f(x)+g(x)) - (L+M)| \le |f(x)-L| + |g(x)-M|`} /><span>. Bound each individual piece by </span><Latex math={String.raw`\frac{\epsilon}{2}`} /><span> using the respective </span><Latex math={String.raw`\delta`} /><span> control for </span><Latex math={String.raw`f`} /><span> and </span><Latex math={String.raw`g`} /><span>, then take the minimum of the two </span><Latex math={String.raw`\delta`} /><span> values.</span>
  </div>
), isDarkMode
        } 
      },
      { 
        id: 'lt-4', type: 'mathNode', position: { x: 550, y: 600 }, 
        data: { 
          title: 'Continuity via Limits', 
          content: (<div><span>Let p be a limit point of E.</span><br/><Latex math={String.raw`f`} /><span> is continuous at </span><Latex math={String.raw`p \iff \lim_{x \to p} f(x) = f(p)`} /></div>), 
          description: (
  <div>
    <span>Proof Hint: By definition, a function </span><Latex math={String.raw`f`} /><span> is continuous at </span><Latex math={String.raw`c`} /><span> if </span><Latex math={String.raw`\lim_{x \to c} f(x) = f(c)`} /><span>. Prove statements regarding this by substituting </span><Latex math={String.raw`f(c)`} /><span> directly into the standard </span><Latex math={String.raw`\epsilon-\delta`} /><span> limit definition, establishing that the value of the function at the target point matches the value the function approaches.</span>
  </div>
), isDarkMode
        } 
      },
      { 
        id: 'lt-5', type: 'mathNode', position: { x: 550, y: 750 }, 
        data: { 
          title: 'Composition of Continuous', 
          content: (<div><span>If </span><Latex math={String.raw`f`} /><span> is cont. at </span><Latex math={String.raw`p`} /><span>, and </span><Latex math={String.raw`g`} /><span> is cont. at </span><Latex math={String.raw`f(p)`} /><span>:</span><br/><span>Then </span><Latex math={String.raw`h = g \circ f`} /><span> (where </span><Latex math={String.raw`h(x) = g(f(x))`} /><span>)</span><br/><span>is continuous at </span><Latex math={String.raw`p`} /><span>.</span></div>), 
          description: (
  <div>
    <span>Proof Hint: To prove </span><Latex math={String.raw`g \circ f`} /><span> is continuous at </span><Latex math={String.raw`c`} /><span>, use the continuity of </span><Latex math={String.raw`g`} /><span> at </span><Latex math={String.raw`f(c)`} /><span> to find a control neighborhood of size </span><Latex math={String.raw`\eta`} /><span>. Then, use the continuity of </span><Latex math={String.raw`f`} /><span> at </span><Latex math={String.raw`c`} /><span> to find a </span><Latex math={String.raw`\delta`} /><span> neighborhood that guarantees </span><Latex math={String.raw`f(x)`} /><span> lands safely within that </span><Latex math={String.raw`\eta`} /><span> neighborhood, completing the chain.</span>
  </div>
), isDarkMode
        } 
      },
      { 
        id: 'lt-6', type: 'mathNode', position: { x: 550, y: 950 }, 
        data: { 
          title: 'Open Set Criterion', 
          content: (<div><Latex math={String.raw`f: X \to Y`} /><span> is continuous on X </span><Latex math={String.raw`\iff`} /><br/><Latex math={String.raw`f^{-1}(V)`} /><span> is open in X for every open set V in Y.</span></div>), 
          description: (
  <div>
    <span>Proof Hint: If </span><Latex math={String.raw`f`} /><span> is continuous, take an open set </span><Latex math={String.raw`V \subseteq Y`} /><span> and a point </span><Latex math={String.raw`x \in f^{-1}(V)`} /><span>; use the continuity of </span><Latex math={String.raw`f`} /><span> to pull an </span><Latex math={String.raw`\epsilon`} /><span>-ball around </span><Latex math={String.raw`f(x)`} /><span> back into a </span><Latex math={String.raw`\delta`} /><span>-ball around </span><Latex math={String.raw`x`} /><span> that sits completely inside </span><Latex math={String.raw`f^{-1}(V)`} /><span>. For the converse, pick </span><Latex math={String.raw`V`} /><span> to be an </span><Latex math={String.raw`\epsilon`} /><span>-ball around </span><Latex math={String.raw`f(c)`} /><span>, meaning its open preimage must contain a </span><Latex math={String.raw`\delta`} /><span>-ball around </span><Latex math={String.raw`c`} /><span>, satisfying the standard definition of continuity.</span>
  </div>
), isDarkMode 
        } 
      },
      { 
        id: 'lt-7', type: 'mathNode', position: { x: 550, y: 1100 }, 
        data: { 
          title: 'Continuity of Vector-Valued Functions and its Sum/Product', 
          content: (<div><span>For </span><Latex math={String.raw`f: X \to \mathbb{R}^k`} /><span> where </span><Latex math={String.raw`f(x) = (f_1(x), \dots, f_k(x))`} /><span>:</span><br/><Latex math={String.raw`f`} /><span> is continuous </span><Latex math={String.raw`\iff f_1, \dots, f_k`} /><span> are continuous.</span><br/><span>Furthermore, </span><Latex math={String.raw`f+g`} /><span> and </span><Latex math={String.raw`f \cdot g`} /><span> are continuous.</span></div>), 
          description: (
  <div>
    <span>Proof Hint: Apply the Cauchy-Schwarz inequality to the standard Euclidean distance formula. By squaring both sides of the triangle inequality and expanding the dot product </span><Latex math={String.raw`||\mathbf{x}-\mathbf{z}||^2 = || (\mathbf{x}-\mathbf{y}) + (\mathbf{y}-\mathbf{z}) ||^2`} /><span>, the cross-term is bounded by Cauchy-Schwarz, directly yielding the standard Triangle Inequality </span><Latex math={String.raw`d(x, z) \le d(x, y) + d(y, z)`} /><span>.</span>
  </div>
), isDarkMode 
        } 
      },
      { id: 'lt-8', type: 'mathNode', position: { x: 550, y: 1300 }, data: { title: 'Preservation of Compactness', content: (<div><span>If </span><Latex math={String.raw`X`} /><span> is compact and </span><Latex math={String.raw`f`} /><span> is continuous, then </span><Latex math={String.raw`f(X)`} /><span> is compact.</span></div>), description: (
  <div>
    <span>Proof Hint: Take an arbitrary open cover of </span><Latex math={String.raw`f(X)`} /><span> in </span><Latex math={String.raw`Y`} /><span> and use the continuity of </span><Latex math={String.raw`f`} /><span> to pull it back, forming an open cover of </span><Latex math={String.raw`X`} /><span> via the preimages. Since </span><Latex math={String.raw`X`} /><span> is compact, extract a finite subcover of </span><Latex math={String.raw`X`} /><span>, whose corresponding target open sets then successfully form a finite subcover of </span><Latex math={String.raw`f(X)`} /><span>.</span>
  </div>
), isDarkMode } },
      { id: 'lt-9', type: 'mathNode', position: { x: 550, y: 1450 }, data: { title: 'Weierstrass (Boundedness)', content: (<div><span>Continuous </span><Latex math={String.raw`f`} /><span> on a compact space </span><Latex math={String.raw`X`} /><span> implies </span><Latex math={String.raw`f(X)`} /><span> is closed and bounded. Thus, </span><Latex math={String.raw`f`} /><span> is bounded.</span></div>), description: (
  <div>
    <span>Proof Hint: First, apply Theorem 4.14 to establish that the image </span><Latex math={String.raw`f(X)`} /><span> is a compact subset of the metric space </span><Latex math={String.raw`\mathbb{R}^k`} /><span>. Then, simply invoke the property that any compact subset of a Euclidean space </span><Latex math={String.raw`\mathbb{R}^k`} /><span> must be closed and bounded (Heine-Borel theorem).</span>
  </div>
), isDarkMode } },
      { 
        id: 'lt-10', type: 'mathNode', position: { x: 550, y: 1600 }, 
        data: { 
          title: 'Maximum-Minimum Theorem', 
          content: (<div><span>For cont. </span><Latex math={String.raw`f`} /><span> on compact </span><Latex math={String.raw`X`} /><span>: Let </span><Latex math={String.raw`M = \sup_{x \in X} f(x)`} /><span>, </span><Latex math={String.raw`m = \inf_{x \in X} f(x)`} /><span>.</span><br/><Latex math={String.raw`\exists p,q \in X \text{ s.t. } f(p) = M \text{ and } f(q) = m`} /><span>.</span></div>), 
          description: (
  <div>
    <span>Proof Hint: By Theorem 4.15, the real-valued image </span><Latex math={String.raw`f(X)`} /><span> is closed and bounded, meaning its supremum </span><Latex math={String.raw`M`} /><span> and infimum </span><Latex math={String.raw`m`} /><span> are finite real numbers. Because </span><Latex math={String.raw`f(X)`} /><span> is a closed set, it must contain all of its limit points, which guarantees that </span><Latex math={String.raw`M`} /><span> and </span><Latex math={String.raw`m`} /><span> are actually elements of </span><Latex math={String.raw`f(X)`} /><span> achieved by some points </span><Latex math={String.raw`p`} /><span> and </span><Latex math={String.raw`q`} /><span>.</span>
  </div>
), isDarkMode 
        } 
      },
      { id: 'lt-11', type: 'mathNode', position: { x: 550, y: 1800 }, data: { title: 'Preservation of Connectedness', content: (<div><span>If </span><Latex math={String.raw`X`} /><span> is connected and </span><Latex math={String.raw`f`} /><span> is continuous, then </span><Latex math={String.raw`f(X)`} /><span> is connected.</span></div>), description: (
    <div>
      <span>Proof Hint: Assume for contradiction that the image </span><Latex math={String.raw`f(E)`} /><span> is disconnected, meaning it can be separated into two disjoint, non-empty open sets </span><Latex math={String.raw`A`} /><span> and </span><Latex math={String.raw`B`} /><span>. By the continuity of </span><Latex math={String.raw`f`} /><span>, their preimages </span><Latex math={String.raw`f^{-1}(A)`} /><span> and </span><Latex math={String.raw`f^{-1}(B)`} /><span> must also be open and disjoint, which splits the original set </span><Latex math={String.raw`E`} /><span> and directly contradicts the fact that </span><Latex math={String.raw`E`} /><span> is connected.</span>
    </div>
  ), isDarkMode } },
      { 
        id: 'lt-12', type: 'mathNode', position: { x: 550, y: 1950 }, 
        data: { 
          title: 'Intermediate Value Theorem', 
          content: (<div><span>Let </span><Latex math={String.raw`f`} /><span> be real continuous on </span><Latex math={String.raw`[a,b]`} /><span>.</span><br/><span>If </span><Latex math={String.raw`f(a) < c < f(b)`} /><span> (or vice versa),</span><br/><Latex math={String.raw`\exists x \in (a,b) \text{ s.t. } f(x) = c`} /><span>.</span></div>), 
          description: (
  <div>
    <span>Proof Hint: Assume </span><Latex math={String.raw`f(a) < u < f(b)`} /><span> and define a set </span><Latex math={String.raw`E = \{x \in [a,b] : f(x) < u\}`} /><span>. Let </span><Latex math={String.raw`c = \sup E`} /><span>, and use the continuity of </span><Latex math={String.raw`f`} /><span> to show that assuming </span><Latex math={String.raw`f(c) < u`} /><span> or </span><Latex math={String.raw`f(c) > u`} /><span> leads to an immediate contradiction regarding </span><Latex math={String.raw`c`} /><span> being the least upper bound, forcing </span><Latex math={String.raw`f(c) = u`} /><span>.</span>
  </div>
), isDarkMode
        } 
      },
    ],
    edges: [
      { id: 'e-lt1', source: 'l-thm-root', target: 'lt-1', animated: true }, { id: 'e-lt2', source: 'l-thm-root', target: 'lt-2', animated: true },
      { id: 'e-lt3', source: 'l-thm-root', target: 'lt-3', animated: true }, { id: 'e-lt4', source: 'l-thm-root', target: 'lt-4', animated: true },
      { id: 'e-lt5', source: 'l-thm-root', target: 'lt-5', animated: true }, { id: 'e-lt6', source: 'l-thm-root', target: 'lt-6', animated: true },
      { id: 'e-lt7', source: 'l-thm-root', target: 'lt-7', animated: true }, { id: 'e-lt8', source: 'l-thm-root', target: 'lt-8', animated: true },
      { id: 'e-lt9', source: 'l-thm-root', target: 'lt-9', animated: true }, { id: 'e-lt10', source: 'l-thm-root', target: 'lt-10', animated: true },
      { id: 'e-lt11', source: 'l-thm-root', target: 'lt-11', animated: true }, { id: 'e-lt12', source: 'l-thm-root', target: 'lt-12', animated: true }
    ] 
  }
});