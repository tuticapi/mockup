.. _about-label:

About Mockup
============

Plone Mockup is an ongoing effort to modernize Plone's javascript story. Check out examples and documentation at http://docs.plone.org/mockup/

The Goals of Mockup
-------------------

1. Standardize configuration of patterns implemented in js
   to use HTML data attributes, so they can be developed
   without running a backend server.
2. Use modern AMD approach to declaring dependencies on other js libs.
3. Full unit testing of js

Install & Run Tests
-------------------
Install Node version 0.10 or greater

    `Install using package manager, e.g. apt or yum
    <https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager>`_

    `Install without using package manager
    <https://github.com/joyent/node/wiki/Installation>`_

Now git clone & build Mockup::

    $ git clone https://github.com/plone/mockup.git
    $ cd mockup
    $ make bootstrap

Run tests with PhantomJS::

    $ make test-once

Run tests with Chrome::

    $ make test-dev

Generate widgets pot file for plone translations::

    $ make i18n-dump


Building the documentation locally
----------------------------------

To build the documentation follow these steps:

.. code-block:: bash

    $ git clone https://github.com/plone/mockup
    $ cd mockup
    $ virtualenv-2.7 .
    $ source bin/activate

Not install dependencies and build.

.. code-block:: bash

    $ cd docs
    $ pip install -r requirements.txt
    $ cd source
    $ make html

You can now open the output from ``_build/html/index.html``. To build the presentation version use ``make presentation`` instead of ``make html``. You can open the presentation at ``presentation/index.html``.

Build new
+++++++++

.. code-block:: bash

    $ git clone https://github.com/plone/mockup
    $ cd mockup
    $ virtualenv-2.7 .
    $ source bin/activate
    $ cd docs
    $ pip install -r requirements.txt
    $ cd source
    $ make html
    $ open _build/html/index.html

Update existing
+++++++++++++++

.. code-block:: bash

    $ git pull
    $ source bin/activate
    $ cd docs/source
    $ make html
    $ open _build/html/index.html


License
-------

The BSD 3-Clause License. Copyrights held by the Plone Foundation.
See `LICENSE <LICENSE.html>`_ for details.


Credits
-------

Originally created by `Rok Garbas <http://garbas.si/>`_ using parts of `Patterns
library <http://patternslib.com/>`_. Now maintained by the `Plone Foundation
<http://plone.org/>`_.


Status of builds
----------------

.. image:: https://travis-ci.org/plone/mockup.png
   :target: https://travis-ci.org/plone/mockup
   :alt: Travis CI

.. image:: https://coveralls.io/repos/plone/mockup/badge.png?branch=master
   :target: https://coveralls.io/r/plone/mockup?branch=master
   :alt: Coveralls

.. image:: https://d2weczhvl823v0.cloudfront.net/plone/mockup/trend.png
   :target: https://bitdeli.com/free
   :alt: Bitdeli
