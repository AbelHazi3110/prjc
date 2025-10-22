from playwright.sync_api import sync_playwright
import time
import requests

def run(playwright):
    requests.post("http://localhost:5000/landlords", json={"name": "Landlord 1", "address": "123 Main St"})
    time.sleep(15)
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")
    page.screenshot(path="jules-scratch/verification/01-home-page.png")
    page.get_by_role("link", name="Landlord 1").click()
    page.wait_for_url("http://localhost:3000/landlords/*")
    page.screenshot(path="jules-scratch/verification/02-landlord-details.png")
    page.get_by_role("button", name="Add a Review").click()
    page.wait_for_url("http://localhost:3000/landlords/*/add-review")
    page.locator('label[for="rating-5"]').click()
    page.get_by_label("Comment").fill("This is a test review.")
    page.get_by_role("button", name="Submit").click()
    page.wait_for_url("http://localhost:3000/landlords/*")
    page.screenshot(path="jules-scratch/verification/03-landlord-details-with-review.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
