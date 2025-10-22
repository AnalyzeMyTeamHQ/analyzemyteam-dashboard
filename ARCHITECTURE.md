AMT Dashboard - Azure Architecture Diagram
🏗️ Complete System Architecture
┌─────────────────────────────────────────────────────────────────────────┐
│                         GitHub Repository                                │
│                  AnalyzeMyTeamHQ/analyzemyteam-dashboard                │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Next.js 15 Dashboard                                            │   │
│  │  ├── Executive Bot Onboarding (Alexandra→Courtney→Denauld)     │   │
│  │  ├── 12 Module Dashboard (2 active, 10 coming soon)            │   │
│  │  ├── Triangle Defense Integration                               │   │
│  │  ├── M.E.L. AI Command Interface                               │   │
│  │  └── JWT Authentication + RBAC                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    │ git push / GitHub Actions
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                    Azure Container Registry                              │
│                         dbcamtregistry                                   │
│                                                                           │
│  Image: dbcamtregistry.azurecr.io/amt-dashboard:latest                  │
│  Size: ~500MB (optimized multi-stage build)                             │
│  Platform: linux/amd64                                                   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    │ docker pull
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                     Azure Container Apps                                 │
│                      Resource Group: amt-production                      │
│                                                                           │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  Container App: amt-dashboard                                   │    │
│  │  ┌──────────────────────────────────────────────────────────┐ │    │
│  │  │  Ingress: External (HTTPS)                                 │ │    │
│  │  │  Port: 3000                                                │ │    │
│  │  │  Scaling: 0-10 replicas (auto-scale)                      │ │    │
│  │  │  CPU: 0.5 cores | Memory: 1.0 GB                          │ │    │
│  │  │  Environment: managedEnvironment-amtproduction-b6cb       │ │    │
│  │  └──────────────────────────────────────────────────────────┘ │    │
│  │                                                                 │    │
│  │  Secrets:                                                       │    │
│  │  ├── jwt-secret                                                │    │
│  │  ├── anthropic-key                                             │    │
│  │  ├── supabase-url / supabase-anon-key                        │    │
│  │  ├── neo4j-uri / neo4j-password                               │    │
│  │  └── other integration keys                                    │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                           │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  Container App: mel-service (existing) ✅                      │    │
│  │  M.E.L. AI Engine powered by Griptape + Claude Sonnet 4       │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                           │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  Log Analytics Workspace: workspaceamtproduction9838 ✅        │    │
│  │  Application Insights | Monitoring | Alerting                  │    │
│  └────────────────────────────────────────────────────────────────┘    │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ↓               ↓               ↓
    ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
    │   GraphQL        │ │    Supabase      │ │      Neo4j       │
    │   Federation     │ │   Real-time DB   │ │  Graph Database  │
    │                  │ │                  │ │                  │
    │  ┌────────────┐ │ │  ┌────────────┐ │ │  ┌────────────┐ │
    │  │ Hive       │ │ │  │PostgreSQL  │ │ │  │  Triangle  │ │
    │  │ Analytics  │ │ │  │ Operations │ │ │  │  Defense   │ │
    │  │(ClickHouse)│ │ │  │   Data     │ │ │  │Formations  │ │
    │  └────────────┘ │ │  └────────────┘ │ │  └────────────┘ │
    │  ┌────────────┐ │ │  ┌────────────┐ │ │  ┌────────────┐ │
    │  │  Supabase  │ │ │  │ Real-time  │ │ │  │   Graph    │ │
    │  │ Operations │ │ │  │Subscriptions│ │ │  │ Relations  │ │
    │  └────────────┘ │ │  └────────────┘ │ │  └────────────┘ │
    │  ┌────────────┐ │ │                  │ │  ┌────────────┐ │
    │  │   Neo4j    │ │ │                  │ │  │   Cypher   │ │
    │  │   Graph    │ │ │                  │ │ │  Queries   │ │
    │  └────────────┘ │ │                  │ │  └────────────┘ │
    └──────────────────┘ └──────────────────┘ └──────────────────┘
🎭 Executive Bot Architecture
User Registration Flow
       │
       ↓
┌──────────────────────────────────────────────────────────────┐
│              Registration Form Submission                     │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ↓
┌──────────────────────────────────────────────────────────────┐
│  Executive Bot Onboarding Sequence (Sequential Display)      │
│                                                               │
│  Step 1: Alexandra "The Coordinator" Martinez (8 seconds)    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Title: Chief Administrative Officer                  │    │
│  │ Priority: #3 (Emergency Operational Leadership)      │    │
│  │ Role: Operations coordination & mission control      │    │
│  │ Message: Platform welcome & team introduction        │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↓                                    │
│  Step 2: Courtney "The Shield" Sellars (8 seconds)          │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Title: CEO / Chief Legal Officer                     │    │
│  │ Priority: #2 (Emergency CEO Authority)               │    │
│  │ Role: Legal protection & executive backup            │    │
│  │ Message: Security, compliance & legal overview       │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↓                                    │
│  Step 3: Denauld "The Mastermind" Brown (10 seconds)        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Title: Founder, CEO & Defensive Coordinator          │    │
│  │ Priority: #1 (Supreme Authority)                     │    │
│  │ Role: System creator & Triangle Defense master       │    │
│  │ Message: Welcome to Triangle Defense system          │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↓                                    │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ↓
                   Dashboard Landing

Environment Variables:
  ENABLE_EXECUTIVE_ONBOARDING=true
  ONBOARDING_SEQUENCE=alexandra,courtney,denauld
🔐 Security Architecture
┌─────────────────────────────────────────────────────────────┐
│                      Azure Security                          │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Managed Identity (System-Assigned)                  │   │
│  │  ├── Container App Identity                         │   │
│  │  ├── Container Registry Pull Access                 │   │
│  │  └── Key Vault Access (optional)                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Secrets Management                                  │   │
│  │  ├── jwt-secret (JWT authentication)                │   │
│  │  ├── anthropic-key (M.E.L. AI)                     │   │
│  │  ├── supabase-* (Database access)                   │   │
│  │  ├── neo4j-* (Graph database)                       │   │
│  │  └── integration-* (Third-party APIs)               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Network Security                                    │   │
│  │  ├── HTTPS Only (TLS 1.2+)                         │   │
│  │  ├── External Ingress (Public endpoint)             │   │
│  │  ├── CORS Configuration                             │   │
│  │  └── Security Headers (Next.js config)              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                  Application Security                        │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Authentication (JWT)                                │   │
│  │  ├── HTTP-only Cookies                              │   │
│  │  ├── 24-hour Token Expiry                           │   │
│  │  ├── Secure Token Storage                           │   │
│  │  └── Refresh Token Rotation                         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Authorization (RBAC)                                │   │
│  │  ├── Tier 1: Founder Authority (Denauld Brown)      │   │
│  │  ├── Tier 2: Executive Command (Courtney, Alexandra)│   │
│  │  ├── Tier 3: AI Core (M.E.L.)                      │   │
│  │  ├── Tier 4-7: Strategic & Operational Teams        │   │
│  │  └── Admin Panel (4-user access only)               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
📊 Data Flow Architecture
User Browser
     │
     │ HTTPS Request
     ↓
Azure Container App (amt-dashboard)
     │
     ├─→ Static Assets (Next.js SSG)
     │   └─→ CDN / Azure Blob Storage (future)
     │
     ├─→ API Routes (Next.js API)
     │   ├─→ /api/auth/* (Authentication)
     │   ├─→ /api/health (Health check)
     │   └─→ /api/graphql (GraphQL proxy)
     │
     ├─→ Server-Side Rendering (SSR)
     │   ├─→ Dashboard pages
     │   ├─→ Module pages
     │   └─→ Admin panel
     │
     └─→ Client-Side Data Fetching
         │
         ├─→ GraphQL Federation
         │   ├─→ Hive Analytics (Performance metrics)
         │   ├─→ Supabase (Operational data)
         │   └─→ Neo4j (Graph relationships)
         │
         ├─→ Supabase Real-time
         │   ├─→ Bot activity subscriptions
         │   ├─→ User presence
         │   └─→ Live updates
         │
         ├─→ M.E.L. Service (mel-service)
         │   ├─→ AI coaching recommendations
         │   ├─→ Natural language queries
         │   └─→ Strategic analysis
         │
         └─→ Direct Database Connections
             ├─→ Neo4j (Triangle Defense queries)
             └─→ Supabase (User management)
🔄 CI/CD Pipeline Architecture
Developer
     │
     │ git push
     ↓
GitHub Repository (main branch)
     │
     │ webhook trigger
     ↓
GitHub Actions Workflow
     │
     ├─→ Step 1: Checkout Code
     │
     ├─→ Step 2: Build Docker Image
     │   └─→ Multi-stage build
     │       ├─→ Stage 1: Dependencies
     │       ├─→ Stage 2: Build Next.js
     │       └─→ Stage 3: Production image
     │
     ├─→ Step 3: Push to Registry
     │   └─→ Azure Container Registry (dbcamtregistry)
     │
     ├─→ Step 4: Deploy to Container Apps
     │   ├─→ Update Container App
     │   ├─→ Apply new revision
     │   └─→ Health check
     │
     └─→ Step 5: Verify Deployment
         ├─→ Test HTTPS endpoint
         ├─→ Check application health
         └─→ Send notification (success/failure)
💰 Cost Architecture
┌─────────────────────────────────────────────────────────────┐
│                    Azure Free Tier                           │
│                                                               │
│  Container Apps                                              │
│  ├── 180,000 vCore-seconds/month (FREE)                     │
│  ├── Current usage: ~50,000/month (0.5 cores * 3 hours/day) │
│  └── Overage: $0.000012/vCore-second                        │
│                                                               │
│  Container Registry (Basic)                                  │
│  ├── 10 GB storage (FREE)                                    │
│  ├── Current usage: ~2 GB                                    │
│  └── Overage: $0.167/GB/month                               │
│                                                               │
│  Log Analytics                                               │
│  ├── 5 GB ingestion/month (FREE)                            │
│  ├── Current usage: ~1 GB/month                             │
│  └── Overage: $2.30/GB                                       │
│                                                               │
│  Bandwidth                                                   │
│  ├── 100 GB outbound/month (FREE)                           │
│  ├── Current usage: ~10 GB/month                            │
│  └── Overage: $0.087/GB                                      │
└─────────────────────────────────────────────────────────────┘

Estimated Monthly Cost: $10-20 (with free tier)
Peak Monthly Cost: $50-75 (high traffic)
🎯 Module Architecture
AMT Dashboard (12 Modules)

Active Modules (2):
├── Power Playbooks ✅
│   ├── Interactive digital playbooks
│   ├── Yard-based animation
│   └── Triangle Defense integration
│
└── M.E.L. AI ✅
    ├── Natural language interface
    ├── Powered by Claude Sonnet 4
    └── Strategic coaching recommendations

Coming Q2-Q3 2025 (10):
├── Executive Suite
├── Dynamic Fabricator
├── Game Changer
├── Q3 Quarterback
├── Dynamic Predictor
├── Pro Scout
├── Recruit
├── Strength
├── Medicine
└── Academics

Each module connects to:
- GraphQL Federation (data)
- M.E.L. AI (intelligence)
- Triangle Defense (methodology)
- Supabase (state management)

Architecture Version: 1.0.0
Last Updated: October 2025
Deployed To: Azure Container Apps (amt-production)
