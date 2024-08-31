import { Context } from "hono";

import {
  createExcercise,
  deleteExcercise,
  getExcerciseById,
  getExcercises,
  updateExcercise,
} from "../services/excerciseService";

export const getExcercisesList = async (c: Context) => {
  try {
    const excercises = await getExcercises();
    return c.json({
      success: true,
      data: excercises,
      message: "Excercises fetched successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      return c.json({
        success: false,
        message: error.message,
      });
    }

    return c.json({
      success: false,
      message: "Failed to fetch excercises",
    });
  }
};

export const getExcercise = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  try {
    const excercise = await getExcerciseById(id);

    if (excercise.length === 0) {
      return c.json(
        {
          success: false,
          message: "Excercise not found",
        },
        404
      );
    }
    return c.json({
      success: true,
      data: excercise,
      message: "Excercise fetched successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      return c.json({
        success: false,
        message: error.message,
      });
    }

    return c.json({
      success: false,
      message: "Failed to fetch excercise",
    });
  }
};

export const postExcercise = async (c: Context) => {
  const body = await c.req.json();
  console.log(body);

  try {
    await createExcercise(body);
    return c.json(
      { success: true, message: "Excercise created successfully" },
      201
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const putExcercise = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  const body = await c.req.json();
  console.log(body);

  try {
    await updateExcercise(id, body);
    return c.json(
      { success: true, message: "Excercise updated successfully" },
      200
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const removeExcercise = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  try {
    await deleteExcercise(id);
    return c.json(
      { success: true, message: "Excercise deleted successfully" },
      200
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};
