import { writable, type Writable } from "svelte/store";
import type { University } from "./University";

export const shortlistedUniversities: Writable<University[]> = writable([]);
