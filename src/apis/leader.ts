import { ApplicationStatus, Leader, LeaderApplication, SLeader, transformSLeaderToLeader } from "@/types/user";
import api from "./app";

export async function getLeaders(page: number = 1, size: number = 10): Promise<Leader[]> {
  const { data } = await api.get<SLeader[]>(`/api/leaders-applies`, {
    params: { page, size },
  });
  return data.map(transformSLeaderToLeader);
}

export async function getLeaderById(id: string): Promise<LeaderApplication> {
  const { data } = await api.get<LeaderApplication>(`/api/leaders-applies/${id}`);
  return data;
}

export async function getMyLeader(): Promise<LeaderApplication> {
  const { data } = await api.get<LeaderApplication>(`/api/leaders-applies/min`);
  return data;
}

export async function createLeader(payload: LeaderApplication): Promise<Leader> {
  const { data } = await api.post<Leader>('/api/leaders-applies', payload);
  return data;
}

export async function updateLeader(id: string, payload: ApplicationStatus): Promise<Leader> {
  const { data } = await api.patch<Leader>(`/api/leaders-applies/${id}/status`, payload);
  return data;
}

export async function deleteLeader(id: string): Promise<void> {
  await api.delete(`/api/leaders/${id}`);
}
