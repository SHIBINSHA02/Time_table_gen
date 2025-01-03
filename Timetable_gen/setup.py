from setuptools import setup, find_packages

setup(
    name='TimeTable',  
    version='0.1.0',
    author='Your Name',
    author_email='shibin24666@gmail.com',
    description='A simple example library',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/username/my_library',  # Replace with your GitHub repo
    packages=find_packages(),
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
    install_requires=[
        # Add dependencies here, e.g.,
        # 'numpy>=1.21.0',
    ],
)
