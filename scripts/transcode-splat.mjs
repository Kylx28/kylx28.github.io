import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { transcodeSpz } from '@sparkjsdev/spark'

const [, , inputPath, outputPath, maxShArgument = '0'] = process.argv
const maxSh = Number.parseInt(maxShArgument, 10)

if (!inputPath || !outputPath || !Number.isInteger(maxSh) || maxSh < 0 || maxSh > 3) {
  console.error('Usage: node scripts/transcode-splat.mjs <input.ply> <output.spz> [max-sh: 0-3]')
  process.exit(1)
}

const source = await readFile(inputPath)
const result = await transcodeSpz({
  inputs: [{ fileBytes: new Uint8Array(source), pathOrUrl: inputPath }],
  maxSh,
})

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, result.fileBytes)
console.log(`Wrote SH degree ${maxSh} · ${(result.fileBytes.byteLength / 1024 / 1024).toFixed(1)} MiB · ${outputPath}`)
