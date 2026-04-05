const SortLib = {

    // 🔹 Helper: перевірка undefined
    handleUndefined(arr) {
        let hasUndefined = arr.some(el => el === undefined);
        if (hasUndefined) {
            console.log("⚠ Масив містить undefined елементи");
        }
        return hasUndefined;
    },

    // 🔹 Helper: порівняння
    compare(a, b, asc) {
        if (a === undefined) return 1;
        if (b === undefined) return -1;
        return asc ? a > b : a < b;
    },

    // 🔹 1. Bubble sort (обміну)
    bubbleSort(arr, asc = true) {
        let comparisons = 0;
        let swaps = 0;
        let a = [...arr];

        this.handleUndefined(a);

        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length - 1; j++) {
                comparisons++;
                if (this.compare(a[j], a[j + 1], asc)) {
                    [a[j], a[j + 1]] = [a[j + 1], a[j]];
                    swaps++;
                }
            }
        }

        console.log("Bubble:", { comparisons, swaps });
        return a;
    },

    // 🔹 2. Selection sort (мінімальних елементів)
    selectionSort(arr, asc = true) {
        let comparisons = 0;
        let swaps = 0;
        let a = [...arr];

        this.handleUndefined(a);

        for (let i = 0; i < a.length; i++) {
            let idx = i;

            for (let j = i + 1; j < a.length; j++) {
                comparisons++;
                if (this.compare(a[idx], a[j], asc)) {
                    idx = j;
                }
            }

            if (idx !== i) {
                [a[i], a[idx]] = [a[idx], a[i]];
                swaps++;
            }
        }

        console.log("Selection:", { comparisons, swaps });
        return a;
    },

    // 🔹 3. Insertion sort (вставок)
    insertionSort(arr, asc = true) {
        let comparisons = 0;
        let moves = 0;
        let a = [...arr];

        this.handleUndefined(a);

        for (let i = 1; i < a.length; i++) {
            let key = a[i];
            let j = i - 1;

            while (j >= 0 && this.compare(a[j], key, asc)) {
                comparisons++;
                a[j + 1] = a[j];
                j--;
                moves++;
            }
            a[j + 1] = key;
        }

        console.log("Insertion:", { comparisons, moves });
        return a;
    },

    // 🔹 4. Shell sort
    shellSort(arr, asc = true) {
        let comparisons = 0;
        let moves = 0;
        let a = [...arr];

        this.handleUndefined(a);

        for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < a.length; i++) {
                let temp = a[i];
                let j = i;

                while (j >= gap && this.compare(a[j - gap], temp, asc)) {
                    comparisons++;
                    a[j] = a[j - gap];
                    j -= gap;
                    moves++;
                }
                a[j] = temp;
            }
        }

        console.log("Shell:", { comparisons, moves });
        return a;
    },

    // 🔹 5. Quick sort (Хоара)
    quickSort(arr, asc = true) {
        let comparisons = 0;
        let swaps = 0;
        let a = [...arr];

        this.handleUndefined(a);

        function qs(left, right) {
            if (left >= right) return;

            let pivot = a[Math.floor((left + right) / 2)];
            let i = left;
            let j = right;

            while (i <= j) {
                while ((asc ? a[i] < pivot : a[i] > pivot)) {
                    i++; comparisons++;
                }
                while ((asc ? a[j] > pivot : a[j] < pivot)) {
                    j--; comparisons++;
                }

                if (i <= j) {
                    [a[i], a[j]] = [a[j], a[i]];
                    swaps++;
                    i++; j--;
                }
            }

            qs(left, j);
            qs(i, right);
        }

        qs(0, a.length - 1);

        console.log("Quick:", { comparisons, swaps });
        return a;
    }
};
