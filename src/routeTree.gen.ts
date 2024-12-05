/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProposalsImport } from './routes/proposals'
import { Route as IndexImport } from './routes/index'
import { Route as ProposalNewImport } from './routes/proposal.new'
import { Route as ProposalIdImport } from './routes/proposal.$id'

// Create/Update Routes

const ProposalsRoute = ProposalsImport.update({
  id: '/proposals',
  path: '/proposals',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProposalNewRoute = ProposalNewImport.update({
  id: '/proposal/new',
  path: '/proposal/new',
  getParentRoute: () => rootRoute,
} as any)

const ProposalIdRoute = ProposalIdImport.update({
  id: '/proposal/$id',
  path: '/proposal/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/proposals': {
      id: '/proposals'
      path: '/proposals'
      fullPath: '/proposals'
      preLoaderRoute: typeof ProposalsImport
      parentRoute: typeof rootRoute
    }
    '/proposal/$id': {
      id: '/proposal/$id'
      path: '/proposal/$id'
      fullPath: '/proposal/$id'
      preLoaderRoute: typeof ProposalIdImport
      parentRoute: typeof rootRoute
    }
    '/proposal/new': {
      id: '/proposal/new'
      path: '/proposal/new'
      fullPath: '/proposal/new'
      preLoaderRoute: typeof ProposalNewImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/proposals': typeof ProposalsRoute
  '/proposal/$id': typeof ProposalIdRoute
  '/proposal/new': typeof ProposalNewRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/proposals': typeof ProposalsRoute
  '/proposal/$id': typeof ProposalIdRoute
  '/proposal/new': typeof ProposalNewRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/proposals': typeof ProposalsRoute
  '/proposal/$id': typeof ProposalIdRoute
  '/proposal/new': typeof ProposalNewRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/proposals' | '/proposal/$id' | '/proposal/new'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/proposals' | '/proposal/$id' | '/proposal/new'
  id: '__root__' | '/' | '/proposals' | '/proposal/$id' | '/proposal/new'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProposalsRoute: typeof ProposalsRoute
  ProposalIdRoute: typeof ProposalIdRoute
  ProposalNewRoute: typeof ProposalNewRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProposalsRoute: ProposalsRoute,
  ProposalIdRoute: ProposalIdRoute,
  ProposalNewRoute: ProposalNewRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/proposals",
        "/proposal/$id",
        "/proposal/new"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/proposals": {
      "filePath": "proposals.tsx"
    },
    "/proposal/$id": {
      "filePath": "proposal.$id.tsx"
    },
    "/proposal/new": {
      "filePath": "proposal.new.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
