from aiohttp import ClientSession
from flask import Flask, request, jsonify
import asyncio

app = Flask(__name__)

async def fetch_numbers(url, session):
    try:
        async with session.get(url, timeout=0.5) as response:
            data = await response.json()
            return data.get('numbers', [])
    except:
        return []

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')

    async def fetch_all_numbers():
        async with ClientSession() as session:
            tasks = [fetch_numbers(url, session) for url in urls]
            results = await asyncio.gather(*tasks)
            return results

    results = asyncio.run(fetch_all_numbers())

    all_numbers = []
    for nums in results:
        all_numbers.extend(nums)

    merged_numbers = sorted(list(set(all_numbers)))
    response_data = {'numbers': merged_numbers}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(host='localhost', port=8008)
