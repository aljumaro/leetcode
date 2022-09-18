class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        return IntStream.range(0, mat.length).
            mapToObj(i -> new int[]{((int)Arrays.stream(mat[i]).filter(x -> x == 1).count()), i}).
            sorted((e1, e2) -> (e1[0] == e2[0]) ? e1[1] - e2[1] : e1[0] - e2[0]).
            limit(k).
            mapToInt(e -> e[1]).
            toArray();
    }
}