import config from '../config/index';
import { loadPages } from './load-pages';
import * as mapDataModule from './map-data';
let mockFetch = null;
let mockJson = null;

jest.mock('./map-data', () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mappedData: true }),
  };
});

describe('load-pages', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
    mockFetch = global.fetch;
    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));

    mockFetch.mockResolvedValue(Promise.resolve({ json: mockJson }));

    jest.clearAllMocks();
  });

  it('should call fetch and mapData with correct values', async () => {
    const result = await loadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/');
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith({ toJson: 1 });
    expect(result).toEqual({ mappedData: true });
  });
  it('should call fetch with correct slug', async () => {
    await loadPages('atenção testando');
    expect(mockFetch).toHaveBeenCalledWith(
      config.url + '/pages/?slug=atenotestando',
    );
  });
});
