import type { ReactNode } from 'react'

export const personalInfo = {
  name: 'Hákon Freyr Gunnarsson',
  displayName: 'Hákon Freyr',
  title: 'Backend Engineer',
  company: 'Wise',
  location: 'Garðabær, Iceland',
  email: 'rationallyprime@gmail.com',
  phone: '+354 660-9570',
  github: 'https://github.com/RationallyPrime',
  website: 'https://hakonfreyr.com',
}

export const professionalSummary =
  "Systems-oriented backend engineer with a track record of rapid domain acquisition and production-grade delivery across genomics, finance, legal AI, and enterprise knowledge management. Consistent architectural approach across all domains: clean separation of concerns, protocol-based extensibility, event-driven patterns, and comprehensive observability. Currently building enterprise knowledge infrastructure on Azure."

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
}

export const featuredProjects: Project[] = [
  {
    slug: 'autopod',
    name: 'Autopod',
    subtitle: 'Multi-Tenant Podcast Orchestrator',
    techStack: 'Go, Python/FastAPI, SQLite, Docker, Cloudflare R2/Tunnel',
    description:
      'First Go code ever written — deployed as a multi-tenant production system with full test coverage and CI/CD.',
    longDescription:
      'A multi-tenant podcast automation system built with a Go control plane driving a Python/FastAPI data plane. Handles the full pipeline from audio extraction through transcription, metadata generation, thumbnail creation, and multi-platform upload — all with crash-resilient state management and per-customer isolation enforced by directory structure and encryption boundaries.',
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
  {
    slug: 'memory-palace',
    name: 'Memory Palace',
    subtitle: 'Graph-Based Semantic Memory System',
    techStack: 'Python/FastAPI, Neo4j, Voyage AI, OAuth, Cloudflare Tunnel, MCP',
    description:
      'Personal/learning project. Query language design, graph databases, and the specification pattern — all learned from scratch for this build.',
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
    githubUrl: 'https://github.com/RationallyPrime/found-family',
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
    slug: 'sokrates',
    name: 'Sokrates IDR',
    subtitle: 'Legal Document Intelligence Platform',
    techStack: 'Python/FastAPI, React/TypeScript, PostgreSQL, Neo4j, MinIO, PGVector, Celery',
    description:
      'Solo-built full-stack enterprise platform (estimated 4,000–8,000+ development hours by independent review).',
    longDescription:
      'A full-stack enterprise legal document intelligence platform built solo — estimated at 4,000–8,000+ development hours by independent review. Features Domain-Driven Design with enforced architectural boundaries, polyglot persistence across four database systems, OpenTelemetry with 13+ instrumentations, and comprehensive testing from unit to E2E with Playwright.',
    highlights: [
      'DDD with architectural boundaries enforced by import-linter contracts: domain → core → infrastructure → api. Repository pattern with protocol-based interfaces',
      'Polyglot persistence: PostgreSQL (asyncpg + SQLAlchemy + Alembic), Neo4j knowledge graph, MinIO document storage, PGVector embeddings',
      'OpenTelemetry with 13+ instrumentations, Logfire + Sentry + structlog for structured observability',
      'Comprehensive testing: pytest-asyncio, factory-boy, Playwright E2E. Automatic TypeScript client generation from OpenAPI specs',
    ],
    metrics: [
      { stat: '4,000+', text: 'Solo development hours (independent estimate)' },
      { stat: '13+', text: 'OpenTelemetry instrumentations for full observability' },
      { stat: '4', text: 'Persistence backends (PostgreSQL, Neo4j, MinIO, PGVector)' },
    ],
    architectureNotes: [
      'DDD with architectural boundaries enforced by import-linter contracts (not just convention): domain → core → infrastructure → api. Repository pattern with protocol-based interfaces. Dependency injection throughout (dependency-injector)',
      'Polyglot persistence: PostgreSQL (asyncpg + SQLAlchemy + Alembic migrations), Neo4j (knowledge graph), MinIO (S3-compatible document storage), PGVector (embeddings)',
      'OpenTelemetry with 13+ instrumentations: FastAPI, Starlette, ASGI, asyncpg, SQLAlchemy, httpx, requests, aiohttp, Celery, gRPC, Jinja2. Logfire + Sentry + structlog',
      'Comprehensive testing: pytest-asyncio, factory-boy, freezegun, Playwright E2E. Automatic TypeScript client generation from OpenAPI specs via Orval',
      'JWT/bcrypt authentication, Celery distributed task queues, Docker multi-stage builds, GitHub Actions CI/CD',
    ],
  },
]

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  description: string
  highlights?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Backend Engineer',
    company: 'Wise (Iceland)',
    period: 'Oct 2024 — Present',
    description:
      'Enterprise knowledge management and internal tooling. Designed and deployed the Grimoire/SETS platform on Azure infrastructure for team use. Working with Microsoft Business Central integrations and connector development.',
  },
  {
    role: 'Data Scientist & Business Intelligence Lead',
    company: 'Travelshift',
    period: 'Aug 2022 — Sep 2024',
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
    description:
      'Established BI environment with real-time dashboards. Product owner for gig economy freelancing platform. Authored grant proposal securing 30M ISK funding from Rannís.',
  },
  {
    role: 'Statistician & Bioinformatician',
    company: 'deCODE Genetics (Amgen)',
    period: '2015 — 2017',
    description:
      'Designed novel haplotype compression algorithm achieving >10× compression ratio versus gzip — enabled loading entire chromosomes into memory. Processed and analyzed large genetic datasets.',
  },
  {
    role: 'Instructor, Department of Computer Science',
    company: 'Reykjavík University',
    period: '2018 — 2021',
    description:
      'Taught while completing MSc: Programming, Data Structures, Calculus & Statistics, Discrete Mathematics II.',
  },
  {
    role: 'Founder',
    company: 'Taurus Supplements',
    period: '2013 — 2017',
    description:
      'Founded and operated a specialized supplement product line. End-to-end ownership: product development, manufacturing coordination, marketing, sales, and daily operations.',
  },
]

export interface StatEntry {
  stat: string
  text: string
}

export const stats: StatEntry[] = [
  { stat: '0.42%', text: 'Forecast accuracy on 2.4B ISK cash flow volume' },
  { stat: '>10×', text: 'Compression ratio vs gzip for haplotype data' },
  { stat: '97%', text: 'Improvement in transaction reconciliation' },
  { stat: '4,000+', text: 'Solo development hours on Sokrates IDR' },
]

export interface SkillCategory {
  name: string
  items: string
  iconName: string
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    items: 'Go (building proficiency — see Autopod), Python (expert), TypeScript/React, SQL, R, DAX/M',
    iconName: 'code-square',
  },
  {
    name: 'Backend & APIs',
    items: 'FastAPI, RESTful API design, OpenAPI specification, automatic client generation (Orval), WebSockets, Pydantic, dependency injection',
    iconName: 'cpu',
  },
  {
    name: 'Databases & Storage',
    items: 'PostgreSQL (asyncpg, SQLAlchemy, Alembic), Neo4j (Cypher, graph modeling), Snowflake, MinIO (S3-compatible), PGVector, SQLite',
    iconName: 'hard-drive',
  },
  {
    name: 'Cloud & Infrastructure',
    items: 'Azure (Container Apps, ACR, Bicep IaC, Databricks, Log Analytics), Docker (multi-stage builds, non-root), Cloudflare (R2, Tunnel), GitHub Actions CI/CD',
    iconName: 'cloud',
  },
  {
    name: 'Architecture & Patterns',
    items: 'Domain-Driven Design, clean/hexagonal architecture, specification pattern, repository pattern, event-driven design, control plane/data plane, Kimball-dimensional modeling',
    iconName: 'squares-2-stacked',
  },
  {
    name: 'Observability & Quality',
    items: 'OpenTelemetry (13+ instrumentations), Logfire, Sentry, structlog, Ruff, basedpyright, Biome, import-linter, pre-commit hooks',
    iconName: 'chart-line',
  },
  {
    name: 'Security',
    items: 'OAuth 2.0 (RFC 7591/8414/9728), JWT, bcrypt, age encryption, Google Cloud OAuth, CORS, non-root containers',
    iconName: 'lock',
  },
  {
    name: 'AI & ML',
    items: 'LLM integration (Anthropic, OpenAI, Google Gemini), RAG systems, vector embeddings (Voyage AI), pydantic-ai, Claude Code, DBSCAN clustering',
    iconName: 'sparkles',
  },
  {
    name: 'Data Engineering',
    items: 'ETL pipeline design, Microsoft Fabric, Power BI, PySpark, Celery distributed task queues, star schema design, data warehouse architecture',
    iconName: 'chart-bar',
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

export const domainAcquisitions = [
  { domain: 'Go', achievement: 'First code → deployed multi-tenant production system with tests, CI, and Docker' },
  { domain: 'Finance', achievement: 'Zero knowledge → audit-ready annual financial reports within months' },
  { domain: 'Genomics', achievement: 'Novel compression algorithm (>10× vs gzip) during first research position' },
  { domain: 'Graph databases', achievement: 'Self-taught Neo4j → type-safe query builder with state machine validation' },
  { domain: 'Azure cloud', achievement: 'First cloud deployment → Bicep IaC with auto-scaling and CI/CD' },
  { domain: 'OAuth 2.0', achievement: 'Self-taught → full 3-RFC implementation for enterprise MCP deployment' },
]
