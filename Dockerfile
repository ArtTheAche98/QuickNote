FROM python:3.13-slim
LABEL authors="Artak Matiniani"

WORKDIR /app

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

COPY pyproject.toml .
COPY uv.lock* .

RUN uv sync --frozen --no-dev

COPY . .

CMD ["sh", "-c", "uv run python manage.py migrate && uv run python manage.py runserver 0.0.0.0:8000"]
