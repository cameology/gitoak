export type StatusCode = 'A' | 'D' | 'M' | 'C' | 'U' | 'T' | 'R'

export interface DiffStatusInterface {
    /**
     * A Addition of a file
     * D Deletion of a file
     * M Modification of file contents
     * R Renaming of a file
     * C File has merge conflicts
     * U Untracked file
     * T Type change (regular/symlink etc.)
     */
    status: StatusCode

    /** absolute path to src file on disk */
    srcAbsPath: string

    /** absolute path to dst file on disk */
    dstAbsPath: string

    /** True if this was or is a submodule */
    isSubmodule: boolean
}
