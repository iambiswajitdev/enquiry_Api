/**
 * @swagger
 * tags:
 *   name: Enquiry
 *   description: Enquiry management APIs
 */

/**
 * @swagger
 * /enquiries:
 *   post:
 *     summary: Create a new enquiry
 *     tags: [Enquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EnquiryInput'
 *     responses:
 *       200:
 *         description: Enquiry created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /get-enquiry:
 *   get:
 *     summary: Get all enquiries
 *     tags: [Enquiry]
 *     responses:
 *       200:
 *         description: List of all enquiries
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /get-enquiry/{id}:
 *   get:
 *     summary: Get an enquiry by ID
 *     tags: [Enquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Enquiry ID
 *     responses:
 *       200:
 *         description: Enquiry fetched successfully
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Enquiry not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /update-enquiry/{id}:
 *   put:
 *     summary: Update an enquiry by ID
 *     tags: [Enquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Enquiry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EnquiryInput'
 *     responses:
 *       200:
 *         description: Enquiry updated successfully
 *       404:
 *         description: Enquiry not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /delete-enquiry/{id}:
 *   delete:
 *     summary: Delete an enquiry by ID
 *     tags: [Enquiry]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Enquiry ID
 *     responses:
 *       200:
 *         description: Enquiry deleted successfully
 *       404:
 *         description: Enquiry not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     EnquiryInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           example: john@example.com
 *         phone:
 *           type: string
 *           example: 9876543210
 *         message:
 *           type: string
 *           example: I am interested in your service
 */
