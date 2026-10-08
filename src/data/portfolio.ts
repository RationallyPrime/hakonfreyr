export const personalInfo = {
  name: 'Hákon Freyr Gunnarsson',
  displayName: 'Hákon Freyr',
  title: 'AI Engineer',
  company: 'Krates ehf.',
  location: 'Garðabær, Iceland',
  email: 'hakon@sokrates.is',
  phone: '+354 660-9570',
  github: 'https://github.com/RationallyPrime',
  website: 'https://hakonfreyr.com',
}

export const professionalSummary =
  "I build production AI systems that can be trusted with real work. Trained as a mathematician and statistician, I have shipped production systems in genomics, finance, travel and enterprise software, each time learning a new domain within months. Since March 2026 I have been building Krates: an on-premises AI department for Icelandic enterprises and the agent-first back-office software it runs on, developed by an engineering team of AI agents that I designed and lead."

export const designPrinciple =
  'One habit across every domain: put the guarantees in the architecture, so a system is correct by construction rather than by care.'

export interface IndexSheet {
  sheet: string
  title: string
  keyDimension: string
  href: string
  current?: boolean
}

// The cover sheet's drawing index: one row per sheet on the home page.
export const drawingIndex: IndexSheet[] = [
  { sheet: '02', title: 'Krates', keyDimension: '4,913 checks, 0 differences', href: '#krates', current: true },
  {
    sheet: '03',
    title: 'The Weave',
    keyDimension: '106 merged changes / week',
    href: '#the-weave',
  },
  { sheet: '04', title: 'Homegrown Hero Films', keyDimension: '60 fps', href: '#homegrown-hero-films' },
  { sheet: '05', title: 'Experience', keyDimension: '6 organisations', href: '#experience' },
]

export interface Project {
  slug: string
  name: string
  subtitle: string
  techStack: string
  description: string
  longDescription: string
  highlights: string[]
  metrics?: { stat: string; text: string }[]
  architectureNotes?: string[]
  githubUrl?: string
  githubLabel?: string
  url?: string
  urlLabel?: string
}

export const featuredProjects: Project[] = [
  {
    slug: 'sokrates',
    name: 'Sókrates',
    subtitle: 'An On-Premises AI Department',
    techStack: 'Python, pydantic-ai, FastAPI, DBOS, Postgres, DuckDB/DuckLake, Logica, Logfire, MCP, NixOS, SvelteKit',
    description:
      'An AI department in a box for Icelandic enterprises: named agents do back-office work under executable rules, and a human consents before anything leaves the box.',
    longDescription:
      "Sókrates ships as a single NixOS appliance on the customer's premises. It ingests the company's existing systems, keeps a governed knowledge graph of the business, and lets named agents do back-office work over Slack, Teams, WhatsApp and email. It comes in two editions: a mini-PC that routes inference through a gateway, and a DGX Spark that runs every model locally for air-gapped customers. Correctness lives in the architecture rather than in the prompt: rules are executable logic, every external action is durable and consented, and every action an agent takes is traced.",
    highlights: [
      'One appliance: a 14-service stack across five credential-isolated containers, each holding at most one kind of customer credential.',
      'Universal schema connector: OpenAPI, JSON Schema, GraphQL and SQL DDL compiled into typed Pydantic models and served to agents as MCP tools.',
      'Rules as executable logic: business rules are Logica laws compiled to DuckDB SQL, and each returns the set of violations rather than a pass/fail.',
      'Evaluated like software: agent behaviour is tested against invariants over live systems (typed output, a selection from the valid set, the shape of the span tree) rather than string matching.',
    ],
    metrics: [
      { stat: '254', text: 'ratified IFRS law primitives; 245 compile and run against their expected violations in CI' },
      { stat: '14', text: 'services in five credential-isolated containers on one appliance' },
      { stat: '47', text: 'numbered architecture invariants, 27 of them enforced mechanically in CI' },
      { stat: '16', text: 'packages in a nine-layer dependency graph, boundaries enforced by import-linter and tach' },
      { stat: '4', text: 'schema languages compiled into agent tools: OpenAPI, JSON Schema, GraphQL and SQL DDL' },
      { stat: '2', text: 'editions: a gateway-routed mini-PC, or fully local inference on a DGX Spark' },
    ],
    architectureNotes: [
      'Durable execution: external actions run as DBOS workflows with write-ahead attempt records, so a crash never repeats an action against a customer system.',
      'Consent: every governed write carries an HMAC-signed consent token. Agents propose; a human approves anything that leaves the box.',
      "Observability as identity: a governed act's identity is its trace span, and spans are mirrored into a DuckLake lakehouse on the box for audit queries, with no data leaving the premises.",
      'Model independence: model identity is injected by configuration, so models can be swapped and compared on real workloads without code changes.',
      'Architecture as law: a registry of numbered invariants and a layered package graph, enforced in CI by import-linter and tach.',
    ],
  },
  {
    slug: 'krepis',
    name: 'Krepis',
    subtitle: 'Back-Office Software Designed for AI Agents',
    techStack: 'Python, Pydantic, Postgres, Event sourcing, Logica, FastAPI, OpenAPI',
    description:
      'Accounting, payroll and workforce management rebuilt from first principles for AI agents, rather than for people clicking through screens.',
    longDescription:
      "Business software is built for people who navigate screens: menus, forms and formatted tables. Agents work through APIs and logs, and before anyone trusts them with money or payroll they need guarantees that today's suites don't give. Krepis starts from one question: what would an accounting system look like if it were designed for agents? The answer is a family of kernels, each limited to the critical core of its domain, in which every action can be previewed, retried and traced. Customer-specific policy lives above the kernels as logic, so the guarantees extend to the parts of each domain the kernels don't cover.",
    highlights: [
      'Operated by agents, unsupervised: AI agents ran a fictional 12-employee company’s September (180 shifts, payroll, two supplier deliveries, inventory close, 14 payments and the books) through six kernels in one process on PostgreSQL, with no human supervising at any point. An independent checker that computed every expected figure from the source facts found zero differences across 4,913 comparisons (3 October 2026).',
      'Seven kernels: double-entry accounting, payroll, workforce management, money movement, inventory, commitments and a work ledger.',
      'Event-sourced and append-only: balances are computed from the log rather than stored, so every number traces back to the events behind it.',
      'Safe for agents by construction: every action is idempotent and has a dry run, so an agent can preview any effect and retry without doubling it.',
      'Rules as logic: business policy is expressed as Logica predicates above the kernels, so it can change without touching kernel code.',
    ],
    metrics: [
      { stat: '4,913', text: 'independent checks against the source facts, zero differences, in a business month run entirely by AI agents with no human supervisor' },
      { stat: '4,125,040', text: 'ISK gross payroll for 12 employees, exact to the króna' },
      { stat: '14', text: 'payments settled (4,835,120 ISK), each matching its source amount, into a 27-transaction ledger with zero unbalanced entries' },
      { stat: '30/30', text: 'stored records identical after a restart; replayed handoffs and duplicate submissions created no new effects' },
    ],
    architectureNotes: [
      'One family: kernels couple through a shared core, never by importing each other, and every kernel must pass the same conformance suite.',
      'Safe to hand to an agent: an overlapping shift and a journal off by 1 ISK were both refused with nothing written, and every invalid call the operator made was rejected the same way.',
      'The first full run surfaced five gaps between kernels; agents fixed and merged all five overnight, and a different agent’s clean rerun passed with nothing outstanding.',
      'One Postgres: a schema per kernel, mirrored into a lakehouse for analytics.',
      "Contracts for agents: each kernel publishes its OpenAPI contract, which Sókrates compiles into the agents' tools.",
    ],
  },
  {
    slug: 'the-weave',
    name: 'The Weave',
    subtitle: 'An Engineering Organisation Staffed by AI Agents',
    techStack: 'Claude, Codex, TypeScript, Bun, Slack, Linear, GitHub Actions, Tailscale',
    description:
      'The team that builds Krates: five named AI engineers who plan, write, review, repair and merge production software around the clock.',
    longDescription:
      "Most people use AI to write code. The Weave uses it to run an engineering team. Five named AI engineers (Claude and Codex), each with its own machine and role, work under a written doctrine and a shared library of standard operating procedures. They file their own tickets, write the code, review each other's changes, fix what the reviewers find and merge, and reviews always come from an agent other than the author. A scheduler gives each task to the agent best placed to take it, weighing remaining subscription capacity, skills, availability and parallelism limits. From July to mid-September 2026 it merged 106 changes a week. By September, 94% of code changes got an independent review before merge. Reviewers caught issues in 83% of those, and only 0.14% of merged changes have ever been reverted. My role is the one a CTO plays: architecture, standards, and the calls that should stay with a human.",
    highlights: [
      'Independent review: changes are reviewed by an agent other than the one that wrote them, and repairs go back through review before the merge gate.',
      'Capacity-aware scheduling: work is routed by remaining subscription capacity, skills, availability and parallelism, turning AI subscriptions into reviewed production software at an average of 250 ISK ($2) per merged change.',
      "Mistakes become procedure: a daily harvest turns what reviewers catch into 40 standard operating procedures holding 414 recorded lessons, which every agent loads before it touches the code they govern. The team's expertise compounds instead of resetting with each session.",
      'Event-driven wake fabric: a self-built broker with outbound-only edges over Tailscale wakes the right agent on the right machine from Slack, Linear and GitHub events.',
    ],
    metrics: [
      { stat: '106/week', text: 'Merged changes, July to mid-September 2026' },
      { stat: '94%', text: 'Code changes independently reviewed (September)' },
      { stat: '250 ISK', text: 'Subscription cost per merged change' },
    ],
    architectureNotes: [
      'Delivery ledger: the broker records every wake in a SQLite ledger, so a missed or duplicated delivery is visible rather than silent.',
      "Usage telemetry: per-agent collectors report remaining subscription capacity, which feeds the scheduler's view of who can take the next task.",
      'Linear as the ledger: a ticket marked ready for an agent wakes the team, and an agent claims it by assigning itself.',
      'Review is measured too: findings are graded by severity, and a finding that recurs at the same line across review rounds is tracked as a repair that did not stick.',
    ],
  },
  {
    slug: 'homegrown-hero-films',
    name: 'Homegrown Hero Films',
    subtitle: 'Short Films Where a Child Is the Hero',
    techStack: 'MiniMax H3, PyTorch, ComfyUI, RunPod, NVIDIA RTX VSR, RIFE, YouTube Data API, Next.js',
    description:
      'Short films, photoreal or animated, where a child is the hero of their own adventure, made with an AI video pipeline I built end to end.',
    longDescription:
      'Homegrown Hero Films makes short films in which a child is the hero. Behind them is a production pipeline: generation on rented GPUs with my own open-source extensions to the MiniMax H3 video model, AI agents that review every film for story, continuity and photorealism before release, upscaling and frame-interpolation finishing, and scheduled publishing to YouTube and TikTok.',
    highlights: [
      'Model extensions: sparse attention, FETA and synchronized audio/video context windows for MiniMax H3, released as open source.',
      'An AI quality gate: a reviewing agent checks every candidate film frame by frame for story, identity continuity and photorealism, and sends its findings back to the producing agent before a human sees the film.',
      'Finishing: NVIDIA RTX VSR upscaling and RIFE frame interpolation to 60 fps, applied shot by shot so interpolation never blends two shots.',
    ],
    metrics: [
      { stat: '60 fps', text: 'Upscaled vertical finishing' },
      { stat: 'AI-reviewed', text: 'Every film before release' },
      { stat: '2', text: 'Platforms: YouTube and TikTok' },
    ],
    url: 'https://homegrownherofilms.com',
    urlLabel: 'homegrownherofilms.com',
    githubUrl: 'https://github.com/RationallyPrime/ComfyUI-H3Forge',
    githubLabel: 'model extensions',
  },
  {
    slug: 'residual-modeling',
    name: 'Residual Modeling',
    subtitle: 'Interpretable, Counterfactual Valuation of Icelandic Homes',
    techStack: 'Python, LightGBM, Postgres/PostGIS, FastAPI, Next.js, Pydantic, uv workspace',
    description:
      'A stack of gradient-boosted residual layers that values Icelandic homes, explains every price in krónur per layer, and re-prices a home under what-if changes.',
    longDescription:
      'A valuation model for Icelandic residential property built as a stack of gradient-boosted residual layers. A sale price is treated as a product of independent signals: the property itself, its broad location, the local market around it, liquidity and timing, and the agency that sold it. In house-price-index-deflated log-price space each signal becomes an additive term, and each LightGBM layer is trained on the residual the layers before it leave. The estimate is therefore a sum of attributable parts, and every valuation comes back as krónur contributed by each layer rather than as one opaque number. The same model answers counterfactual questions: change the floor area, rooms, floor, construction year or selling agency, and it re-prices the home and shows which layers moved.',
    highlights: [
      'Gradient-boosted residual stacking: one LightGBM model per layer, each fitted to what the earlier layers could not explain, in HPI-deflated log-price space.',
      'Interpretable by construction: every valuation returns the krónur contributed by structure, broad location, local market, and liquidity and timing, each layer with its own cross-validated R², ready for a waterfall chart.',
      'Counterfactual pricing: a batch scenarios endpoint re-prices a property under changed rooms, floor area, lot size, floor, construction year, property type, postal code, view or selling agency, and returns the price delta and the per-layer breakdown for each scenario.',
      'Comparables done properly: the local-market layer learns only comparable-sale deltas, anchored on the frozen structure-and-location prediction and recomputed out of fold, so training and serving use the same comparables.',
      'Leakage hunted down: early cross-validation scores of 94.5% traced back to asking-price and assessment leakage and random splits. The model is now judged only on time-ordered out-of-fold sales.',
    ],
    metrics: [
      { stat: '12,709', text: 'time-ordered out-of-fold sales in the evaluation' },
      { stat: '6.6%', text: 'median absolute error across all sales' },
      { stat: '5.9%', text: 'median absolute error for apartments (9,507 sales)' },
      { stat: '11', text: 'packages in a uv workspace with an enforced dependency graph' },
    ],
    architectureNotes: [
      'Agency effects use empirical-Bayes shrinkage per agency, so small agencies are pulled toward the market rather than over-fitted.',
      'A listing-presentation layer is quarantined until it beats the holdout: it raised cross-validation scores without improving held-out sales.',
      'Spatial structure combines a postal-area prior with a continuous-coordinate residual, promoted to depth 10 after an ablation study.',
      'Every trained model carries its lineage, and the serving cache is refreshed from the production artifacts so the API and the model never disagree.',
      'Served end to end: precomputed market baselines in Postgres, live inference that applies agency effects on request, a FastAPI service and a Next.js valuation app with a waterfall of layer contributions and a scenarios panel.',
    ],
  },
  {
    slug: 'memory-palace',
    name: 'Memory Palace',
    subtitle: 'Graph-Based Semantic Memory System',
    techStack: 'Python/FastAPI, Neo4j, Voyage AI, OAuth, Cloudflare Tunnel, MCP',
    description:
      "Long-term memory for language models, in daily use as Claude's persistent memory since 2025. Query language design, graph databases and the specification pattern, all learned from scratch for this build.",
    longDescription:
      'A graph-based semantic memory system that stores, relates, and retrieves knowledge using Neo4j and vector embeddings. Features a custom query language built on the discriminated union specification pattern, a type-safe Cypher query builder with compile-time validation, and integration as an MCP server so Claude.ai can use it as persistent external memory.',
    highlights: [
      'Clean architecture with enforced layer boundaries: domain → infrastructure → services → api. Protocol-based interfaces for all external integrations',
      'Extensible query API using discriminated union specification pattern: 12+ composable spec types generating both Python predicates and Cypher WHERE clauses',
      'Type-safe Cypher query builder with state machine validating clause ordering at construction time',
      'Integrated as MCP server enabling Claude.ai to use the system as persistent external memory',
    ],
    metrics: [
      { stat: '12+', text: 'Composable specification types in the query DSL' },
      { stat: '4-layer', text: 'Clean architecture with enforced boundaries' },
      { stat: 'MCP', text: 'Integrated as Claude.ai external memory server' },
    ],
    architectureNotes: [
      'Discriminated union specification pattern: MemorySpecification is an Annotated union composable via .and_(), .or_(), .not_(). Each spec generates both Python predicates and Cypher WHERE clauses',
      'Type-safe Cypher query builder with state machine validating clause ordering at construction time. LiteralString typing throughout for injection safety',
      'Circuit breaker (CLOSED → OPEN → HALF_OPEN) with exponential backoff for Voyage AI embedding calls. Proper error classification (rate limit → retryable, auth → not)',
      'Typed error architecture: ApplicationError base with ErrorCode enum, ErrorLevel, typed ErrorDetails models. @with_error_handling decorator with configurable reraise behavior',
      'Event-driven background processing: DreamJobOrchestrator runs scheduled jobs including salience decay (configurable half-life), DBSCAN topic clustering, and re-indexing',
    ],
    githubUrl: 'https://github.com/Skrates/found-family',
    githubLabel: 'Public',
  },
  {
    slug: 'grimoire',
    name: 'Grimoire (SETS)',
    subtitle: 'Enterprise Knowledge Management Platform',
    techStack: 'Python/FastAPI, Neo4j AuraDB, Azure Container Apps, Bicep IaC, OAuth 2.0, MCP',
    description:
      'Enterprise evolution of Memory Palace, deployed on Azure at Wise. Same architectural DNA evolved for cloud infrastructure ownership and team-scale deployment.',
    longDescription:
      'The enterprise evolution of Memory Palace, deployed on Azure at Wise. Inherits the same specification-pattern core and Neo4j graph backend, but adds full Azure infrastructure ownership (Bicep IaC, Container Apps, auto-scaling), three-RFC OAuth 2.0 authentication, and a pluggable connector architecture for Confluence, GitHub, and code complexity analysis — all queryable through a unified JSON DSL.',
    highlights: [
      'Deployed on Azure Container Apps with Bicep IaC: Neo4j AuraDB, Azure Container Registry, auto-scaling (scale-to-zero dev, 1–3 replicas prod)',
      'Full OAuth 2.0 authentication spanning three RFCs (7591, 8414, 9728) — Claude.ai MCP connector auto-negotiates auth, zero-config enterprise deployment',
      'Pluggable connector architecture: Confluence space indexing, GitHub repo analysis, code complexity metrics — all queryable through unified specification-based JSON DSL',
      'Enterprise features: JWT identity tracking, background job orchestration with APScheduler, liveness/readiness health probes',
    ],
    metrics: [
      { stat: '3 RFCs', text: 'Full OAuth 2.0 stack (7591, 8414, 9728)' },
      { stat: '0→3', text: 'Auto-scaling replicas with scale-to-zero dev' },
      { stat: 'IaC', text: 'Full Azure infrastructure as Bicep code' },
    ],
    architectureNotes: [
      'Azure Container Apps with Bicep IaC: Neo4j AuraDB for graph + vector search, Azure Container Registry, Log Analytics workspace, CI/CD via GitHub Actions with smoke test (MCP discovery endpoint validation)',
      'Dynamic Client Registration (RFC 7591), Authorization Server Metadata (RFC 8414), Protected Resource Metadata (RFC 9728). Domain-restricted email (@wise.is) — zero-config enterprise deployment',
      'Pluggable connector architecture: Confluence (space indexing, semantic page search with label/space filtering), GitHub repositories (clone → language detection → embedding generation → graph storage), code complexity analysis (Halstead, cyclomatic, cognitive)',
      'Same specification core evolved: 12+ discriminated union types generating type-safe Cypher, composable queries with similarity search, relationship traversal, and pagination in a single endpoint',
      'Multi-stage Docker builds with non-root users, liveness/readiness health probes, JWT identity tracking for audit trails',
    ],
  },
  {
    slug: 'sokrates-idr',
    name: 'Sókrates IDR',
    subtitle: 'Legal Document Intelligence Platform',
    techStack: 'Python/FastAPI, React/TypeScript, PostgreSQL, Neo4j, MinIO, PGVector, Celery',
    description:
      'A full-stack legal document intelligence platform, built solo in 2025.',
    longDescription:
      'A full-stack enterprise legal document intelligence platform, built solo in 2025. Features Domain-Driven Design with enforced architectural boundaries, polyglot persistence across four database systems, OpenTelemetry with 13+ instrumentations, and comprehensive testing from unit to E2E with Playwright.',
    highlights: [
      'DDD with architectural boundaries enforced by import-linter contracts: domain → core → infrastructure → api. Repository pattern with protocol-based interfaces',
      'Polyglot persistence: PostgreSQL (asyncpg + SQLAlchemy + Alembic), Neo4j knowledge graph, MinIO document storage, PGVector embeddings',
      'OpenTelemetry with 13+ instrumentations, Logfire + Sentry + structlog for structured observability',
      'Comprehensive testing: pytest-asyncio, factory-boy, Playwright E2E. Automatic TypeScript client generation from OpenAPI specs',
    ],
    metrics: [
      { stat: '4', text: 'Persistence backends (PostgreSQL, Neo4j, MinIO, PGVector)' },
      { stat: '13+', text: 'OpenTelemetry instrumentations for full observability' },
      { stat: 'E2E', text: 'Playwright tests from login to document' },
    ],
    architectureNotes: [
      'DDD with architectural boundaries enforced by import-linter contracts (not just convention): domain → core → infrastructure → api. Repository pattern with protocol-based interfaces. Dependency injection throughout (dependency-injector)',
      'Polyglot persistence: PostgreSQL (asyncpg + SQLAlchemy + Alembic migrations), Neo4j (knowledge graph), MinIO (S3-compatible document storage), PGVector (embeddings)',
      'OpenTelemetry with 13+ instrumentations: FastAPI, Starlette, ASGI, asyncpg, SQLAlchemy, httpx, requests, aiohttp, Celery, gRPC, Jinja2. Logfire + Sentry + structlog',
      'Comprehensive testing: pytest-asyncio, factory-boy, freezegun, Playwright E2E. Automatic TypeScript client generation from OpenAPI specs via Orval',
      'JWT/bcrypt authentication, Celery distributed task queues, Docker multi-stage builds, GitHub Actions CI/CD',
    ],
  },
  {
    slug: 'autopod',
    name: 'Autopod',
    subtitle: 'Multi-Tenant Podcast Orchestrator',
    techStack: 'Go, Python/FastAPI, SQLite, Docker, Cloudflare R2/Tunnel',
    description:
      'Drop in a video and it is published to YouTube, Spotify and Apple Podcasts with subtitles in English, Icelandic and Polish, a summary, tags and hashtags, and clips of the most quotable moments. My first Go project, in multi-tenant production.',
    longDescription:
      'A multi-tenant podcast automation system built with a Go control plane driving a Python/FastAPI data plane. Handles the full pipeline from audio extraction through transcription, subtitles in English, Icelandic and Polish, summaries, tags and hashtags, extraction of the most quotable clips, thumbnail creation, and multi-platform upload — all with crash-resilient state management and per-customer isolation enforced by directory structure and encryption boundaries.',
    highlights: [
      'Control plane / data plane split: Go orchestrator drives a 7-step pipeline by calling stateless Python/FastAPI endpoints with typed HTTP contracts mirrored across languages',
      'Crash-resilient job state machine with SQLite persistence — every state transition writes to disk before proceeding, GetActiveJobs() resumes all in-flight jobs on startup',
      'Multi-tenancy by construction: per-customer watch directories, age-encrypted secrets decrypted at runtime, namespaced cloud storage on Cloudflare R2',
      '21 Go tests + 36 Python tests, GitHub Actions CI with -race flag, Docker multi-stage builds',
    ],
    metrics: [
      { stat: '7-step', text: 'Automated pipeline from ingestion to multi-platform publish' },
      { stat: '57', text: 'Combined Go + Python tests with race detection' },
      { stat: '2-lang', text: 'Typed HTTP contracts mirrored across Go and Python' },
    ],
    architectureNotes: [
      'Goroutine semaphore (chan struct{}, capacity 2) with mutex-protected file map preventing watcher re-triggering on pipeline-generated outputs',
      'File stability detection polls size every 2s until stable (30s timeout) to handle large Google Drive sync uploads',
      'Idiomatic Go: internal/ package layout, sql.NullString, table-driven tests, httptest.NewServer for contract verification, error wrapping with %w',
      'OAuth consent flow → token capture → age encrypt → save. Stale flow pruning (10-min TTL)',
      'AI-powered error recovery: ffprobe analysis → Gemini diagnosis → suggested ffmpeg fix → validated execution',
      'Systemd timer for Google Drive sync with randomized delay (thundering herd prevention)',
    ],
    githubUrl: 'https://github.com/RationallyPrime/autopod',
    githubLabel: 'Private',
  },
]

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  description: string
  keyResult: string
  highlights?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Founder',
    company: 'Krates ehf.',
    period: 'Mar 2026 — Present',
    keyResult: 'Sókrates, Krepis and the Weave, now in pilots',
    description:
      'An AI-native back office for Icelandic enterprises, correct by construction: agents do the work, rules are executable logic, and a human consents before anything leaves the box. Now in pilots.',
    highlights: [
      'Sókrates: an on-premises AI department in a single NixOS appliance, with named agents working over Slack, Teams, WhatsApp and email',
      'Krepis: seven back-office kernels (accounting, payroll, workforce management and more) designed for AI agents rather than for people',
      'The Weave: the engineering organisation that builds both, staffed by five AI engineers that I direct',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Wise lausnir (Microsoft Dynamics partner)',
    period: 'Oct 2024 — Mar 2026',
    keyResult: 'Fabric onboarding cut from about three weeks to half a workday',
    description:
      "Designed and deployed Grimoire, an internal knowledge platform on Azure that Claude uses as an MCP server, rolled out to every technical employee through Claude Team admin. Built a self-healing ETL framework for Microsoft Fabric with models generated from OpenAPI schemas; in the Business Central solution for municipalities it cut onboarding from legacy on-premises systems into Fabric/OneLake from about three weeks to half a workday, and its schema-driven design became the starting point for Sókrates's universal schema connector.",
  },
  {
    role: 'Data Scientist & Business Intelligence Lead',
    company: 'Travelshift',
    period: 'Aug 2022 — Sep 2024',
    keyResult: '0.42% forecast error on 2.4B ISK of cash flow, six months out',
    description:
      "Complete overhaul of data infrastructure, financial process automation, and predictive modeling for Iceland's largest travel marketplace.",
    highlights: [
      'Kimball-dimensional star schema in Snowflake, ETL pipelines, Power BI reporting',
      'Cash flow forecasting with 0.42% margin of error on 2.4B ISK volume (6-month horizon)',
      'Automated payment reconciliation: 1-in-35 → <1-in-1,000 unreconcilable transactions',
      'Reduced booking department from 7 contractors to 2 while improving performance',
    ],
  },
  {
    role: 'Data Analyst & Product Owner',
    company: 'Alfreð Atvinnuleit',
    period: 'May 2021 — Aug 2022',
    keyResult: 'Grant proposal that secured 30M ISK from Rannís',
    description:
      'Product owner for the Giggó gig-economy platform. Established the BI environment with real-time dashboards. Authored the grant proposal that secured 30M ISK from Rannís.',
  },
  {
    role: 'Instructor, Department of Computer Science',
    company: 'Reykjavík University',
    period: '2018 — 2021',
    keyResult: 'Taught programming, data structures, calculus and statistics',
    description:
      'Taught while completing MSc: Programming, Data Structures, Calculus & Statistics, Discrete Mathematics II.',
  },
  {
    role: 'Statistician & Bioinformatician',
    company: 'deCODE Genetics (Amgen)',
    period: '2015 — 2017',
    keyResult: 'Haplotype compression more than 10× better than gzip',
    description:
      'Designed novel haplotype compression algorithm achieving >10× compression ratio versus gzip — enabled loading entire chromosomes into memory. Processed and analyzed large genetic datasets.',
  },
]

export interface StatEntry {
  stat: string
  text: string
}

export const stats: StatEntry[] = [
  { stat: '0.42%', text: 'Forecast error on 2.4B ISK of cash flow, six months out' },
  { stat: '>10×', text: 'Compression ratio vs gzip for haplotype data' },
  { stat: '97%', text: 'Fewer unreconcilable payment transactions' },
  { stat: '7 → 2', text: 'Booking contractors, with better performance' },
]

export interface SkillCategory {
  name: string
  items: string
  iconName: string
}

export const skills: SkillCategory[] = [
  {
    name: 'AI & agents',
    items: 'pydantic-ai, MCP, Anthropic/OpenAI/Gemini APIs, agent evaluation, RAG and embeddings, durable agent workflows (DBOS), multi-agent engineering teams, local inference, video diffusion models',
    iconName: 'sparkles',
  },
  {
    name: 'Languages',
    items: 'Python (expert), SQL, TypeScript, Go, R, Logica',
    iconName: 'code-square',
  },
  {
    name: 'Backend & APIs',
    items: 'FastAPI, Pydantic, OpenAPI, typed client generation, OAuth 2.0 (RFC 7591/8414/9728), event sourcing, idempotent and replayable APIs',
    iconName: 'cpu',
  },
  {
    name: 'Data',
    items: 'Postgres, DuckDB/DuckLake, Snowflake, Neo4j, Microsoft Fabric/PySpark, Kimball modelling, Power BI, forecasting',
    iconName: 'chart-bar',
  },
  {
    name: 'Infrastructure',
    items: 'NixOS, Docker, Azure (Container Apps, Bicep), AWS, Cloudflare, Tailscale, RunPod, GitHub Actions with self-hosted runners',
    iconName: 'cloud',
  },
  {
    name: 'Engineering & observability',
    items: 'Domain-driven design, architecture enforced in CI (import-linter, tach), typed error hierarchies, Logfire/OpenTelemetry, uv/ruff/ty',
    iconName: 'chart-line',
  },
]

export interface Education {
  degree: string
  school: string
  period: string
  focus: string
}

export const education: Education[] = [
  {
    degree: 'MSc Computer Science',
    school: 'Reykjavík University',
    period: '2017 — 2021',
    focus: 'Artificial Intelligence and Data Science. Thesis: Recommendation Systems.',
  },
  {
    degree: 'BSc Mathematics',
    school: 'University of Iceland',
    period: '2011 — 2016',
    focus: 'Computational Mathematics and Computer Science.',
  },
]

// Copy for the home page's sheets. Figures are the measured ones on the CV.
export const sheetCopy = {
  krates: {
    lede: 'An AI-native back office for Icelandic enterprises, correct by construction: agents do the work, rules are executable logic, and a human consents before anything leaves the box. Founder, March 2026 to present; now in pilots.',
    widthDim: { value: '14', label: 'services in five credential-isolated containers' },
    heightDim: { value: '7', label: 'agent-first kernels' },
    sokrates: 'The on-premises AI department: one NixOS appliance that ingests a company’s systems and lets named agents do back-office work over Slack, Teams, WhatsApp and email.',
    krepis: 'Seven back-office kernels (accounting, payroll, workforce management and more) built for AI agents rather than for people clicking through screens.',
    notes: [
      'Run by agents, unsupervised: AI agents operated a fictional 12-employee company’s whole month through all six Krepis kernels with no human supervisor. Payroll, 14 payments and the books came out exact: 4,913 independent checks, zero differences.',
      'Business rules are Logica laws compiled to DuckDB SQL; each returns the set of violations, not a pass or fail.',
      'An agent that dies mid-task never repeats an external action (DBOS, write-ahead attempt records).',
      'Every governed action carries a signed consent token and is its own trace span in a queryable audit store.',
      'Krepis kernels are event-sourced and append-only; every action is idempotent and has a dry run.',
      'Two editions: a gateway-routed mini-PC, or fully local inference on a DGX Spark for air-gapped customers.',
    ],
  },
  weave: {
    lede: 'The engineering organisation that builds Krates: five named AI engineers (Claude and Codex), each with its own machine and role, working under a written doctrine. I designed it and lead it, in the role a CTO plays.',
    topDim: { value: '106', label: 'merged changes a week, July to mid-September 2026' },
    sideDim: { value: '94%', label: 'independently reviewed before merge (September)' },
    bottomDim: { value: '250 ISK', label: '($2) of AI subscription per merged change' },
    caption: 'Reviews always come from an agent other than the author. Repairs go back through review before the merge gate.',
    notes: [
      'Reviewers found issues in 83% of the changes they reviewed, and only 0.14% of merged changes have ever been reverted.',
      'A scheduler I built gives each task to the agent best placed to take it, by remaining subscription capacity, skills, availability and parallelism.',
      'Mistakes become procedure: a daily harvest turns what reviewers catch into 40 standard operating procedures holding 414 recorded lessons.',
      'A self-built broker with outbound-only edges over Tailscale wakes the right agent on the right machine from Slack, Linear and GitHub.',
    ],
  },
  films: {
    lede: 'Short films, photoreal or animated, where a child is the hero of their own adventure, made with an AI video pipeline I built end to end.',
    dim: { value: '60 fps', label: 'finishing: NVIDIA RTX VSR upscaling and RIFE interpolation, shot by shot' },
    notes: [
      'Generation runs on rented GPUs with my own open-source extensions to the MiniMax H3 video model.',
      'Every film is reviewed frame by frame by an AI quality gate before a human sees it.',
      'Interpolation never blends two shots: cuts are detected and every shot is finished on its own.',
    ],
  },
  experience: {
    lede: 'Mathematics and statistics first, then production systems in genomics, finance, travel and enterprise software, each a new domain learned within months.',
  },
}
