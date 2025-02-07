import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:'skwQgSvFA2dqPYDhZI93CSRSDxyMFp3KfaIskmXkE0LbvCpX5VF3oCggLScn32ZcKbeCf5YvvWLqfHEbln3VMdmGibIQTlLIz9zmePAr19wHE9phatf0asY19GYiKelOjsKODxEdoLOHfdabPdIdMPlpH5NxfxJz7WYKGCYsYKkIRqA92gj1'

})
