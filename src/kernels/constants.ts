export const NAMESPACE = "gitoak"

export const MODE_REGULAR_FILE = '100644'
export const MODE_EMPTY = '000000'
export const MODE_SUBMODULE = '160000'

// https://git-scm.com/docs/git-diff-index#_raw_output_format
export const MODE_LEN = 6
export const SHA1_LEN = 40
export const SRC_MODE_OFFSET = 1
export const DST_MODE_OFFSET = 2 + MODE_LEN
export const STATUS_OFFSET = 2 * MODE_LEN + 2 * SHA1_LEN + 5
