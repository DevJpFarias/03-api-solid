import { beforeEach, describe, expect, it } from "vitest";
import { FetchNearbyGymsUseCase } from "./fetch-nearby-gyms";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      id: 'gym-01',
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -22.7266211,
      longitude: -43.5126098,
    })

    await gymsRepository.create({
      id: 'gym-02',
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: 20.3886703,
      longitude: -51.0632214,
    })

    const { gyms } = await sut.execute({
      userLatitude: -22.7266211,
      userLongitude: -43.5126098,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Near Gym' })
    ])
  })
})